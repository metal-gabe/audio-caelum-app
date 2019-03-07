class Api::SongsController < ApplicationController
  before_action :require_login, except: [:index, :show]

  def index
    @songs = Song.all
    render :index
  end

  def show
    title = params[:song][:song_title].downcase
    # @song = Song.find_by(song_title: params[:song][:song_title])
    @song = Song.where('lower(song_title) = ?', title).first
      # This line above ignores case sensitivity
      # when querying the database for a specific song
    render :show
  end

  def create
    @song = Song.new(song_params)
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def update
    @song = Song.find(params[:id])
    if @song.update(song_params)
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  # THIS FEATURE WILL BE IMPLEMENTED LATER
  def destroy
    @song = Song.find(params[:id])
    @song.destroy if @song.artist == current_user
    # do I need to render anything here?
  end

  private

  def song_params
    params.require(:song).permit(:song_title, :audio_file, :artist_id)
  end
end
