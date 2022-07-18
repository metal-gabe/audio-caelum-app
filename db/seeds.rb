# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

ActiveRecord::Base.transaction do
   # ---------------------------------------------
   # ALL USERS DATA
   # ---------------------------------------------
   User.destroy_all
   dethklok = User.create!(
      username: 'dethklok',
      email: 'deth@klok.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_dethklok.jpg'),
         filename: 'pi_dethklok.jpg',
      },
   )
   pentakill = User.create!(
      username: 'pentakill',
      email: 'penta@kill.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_pentakill.jpg'),
         filename: 'pi_pentakill.jpg',
      },
   )
   etc = User.create!(
      username: 'etc',
      email: 'etc@blizz.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_etc.jpg'),
         filename: 'pi_etc.jpg',
      },
   )
   bueller = User.create!(
      username: 'bueller',
      email: 'b@b.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_bueller.jpeg'),
         filename: 'pi_bueller.jpeg',
      },
   )
   sloane = User.create!(
      username: 'sloane',
      email: 's@b.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_sloane.png'),
         filename: 'pi_sloane.png',
      },
   )
   cameron = User.create!(
      username: 'cameron',
      email: 'c@b.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_cameron.png'),
         filename: 'pi_cameron.png',
      },
   )
   rooney = User.create!(
      username: 'rooney',
      email: 'r@b.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_rooney.jpg'),
         filename: 'pi_rooney.jpg',
      },
   )
   jeanie = User.create!(
      username: 'jeanie',
      email: 'j@b.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_jeanie.jpg'),
         filename: 'pi_jeanie.jpg',
      },
   )
   sylvanas = User.create!(
      username: 'sylvanas',
      email: 'sylvanas@blizz.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_sylvanas.png'),
         filename: 'pi_sylvanas.png',
      },
   )
   thrall = User.create!(
      username: 'thrall',
      email: 'thrall@blizz.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_thrall.jpg'),
         filename: 'pi_thrall.jpg',
      },
   )
   valeera = User.create!(
      username: 'valeera',
      email: 'valeera@blizz.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_valeera.jpg'),
         filename: 'pi_valeera.jpg',
      },
   )
   tracer = User.create!(
      username: 'tracer',
      email: 'tracer@blizz.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_tracer.jpg'),
         filename: 'pi_tracer.jpg',
      },
   )
   liming = User.create!(
      username: 'liming',
      email: 'liming@blizz.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_liming.jpg'),
         filename: 'pi_liming.jpg',
      },
   )
   diablo = User.create!(
      username: 'diablo',
      email: 'diablo@blizz.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_diablo.jpg'),
         filename: 'pi_diablo.jpg',
      },
   )
   ekko = User.create!(
      username: 'ekko',
      email: 'ekko@lol.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_ekko.jpg'),
         filename: 'pi_ekko.jpg',
      },
   )
   ashe = User.create!(
      username: 'ashe',
      email: 'ashe@lol.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_ashe.jpg'),
         filename: 'pi_ashe.jpg',
      },
   )
   gnar = User.create!(
      username: 'gnar',
      email: 'gnar@lol.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_gnar.jpg'),
         filename: 'pi_gnar.jpg',
      },
   )
   sion = User.create!(
      username: 'sion',
      email: 'sion@lol.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_sion.jpg'),
         filename: 'pi_sion.jpg',
      },
   )
   yasuo = User.create!(
      username: 'yasuo',
      email: 'yasuo@lol.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_yasuo.jpg'),
         filename: 'pi_yasuo.jpg',
      },
   )
   jhin = User.create!(
      username: 'jhin',
      email: 'jhin@lol.com',
      password: 'password',
      profile_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/profile_imgs/pi_jhin.jpg'),
         filename: 'pi_jhin.jpg',
      },
   )


   # ---------------------------------------------
   # ALL SONGS DATA
   # ---------------------------------------------
   Song.destroy_all
   song01 = Song.create!(
      song_title: 'Undead Mess',
      artist_id: dethklok[:id],
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_dethklok_1.jpg'),
         filename: 'album_dethklok_1.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/01--undead_mess.m4a'),
         filename: '01--undead_mess.m4a',
      },
   )
   song02 = Song.create!(
      song_title: 'The Other Side',
      artist_id: dethklok[:id],
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_dethklok_1.jpg'),
         filename: 'album_dethklok_1.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/02--the_other_side.m4a'),
         filename: '02--the_other_side.m4a',
      },
   )
   song03 = Song.create!(
      song_title: 'Hindrance',
      artist_id: dethklok[:id],
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_dethklok_1.jpg'),
         filename: 'album_dethklok_1.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/03--hindrance.m4a'),
         filename: '03--hindrance.m4a',
      },
   )
   song04 = Song.create!(
      song_title: 'Face 2 Face',
      artist_id: dethklok[:id],
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_dethklok_2.jpg'),
         filename: 'album_dethklok_2.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/04--face_2_face.m4a'),
         filename: '04--face_2_face.m4a',
      },
   )
   song05 = Song.create!(
      artist_id: dethklok[:id],
      song_title: 'Life For Me',
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_dethklok_2.jpg'),
         filename: 'album_dethklok_2.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/05--life_for_me.m4a'),
         filename: '05--life_for_me.m4a',
      },
   )
   song06 = Song.create!(
      artist_id: dethklok[:id],
      song_title: 'Pretty Poison',
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_dethklok_3.jpg'),
         filename: 'album_dethklok_3.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/06--pretty_poison.m4a'),
         filename: '06--pretty_poison.m4a',
      },
   )
   song07 = Song.create!(
      artist_id: dethklok[:id],
      song_title: 'Take Cover',
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_dethklok_3.jpg'),
         filename: 'album_dethklok_3.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/07--take_cover.m4a'),
         filename: '07--take_cover.m4a',
      },
   )
   song08 = Song.create!(
      artist_id: pentakill[:id],
      song_title: 'Time To Pay',
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_pentakill_1.jpg'),
         filename: 'album_pentakill_1.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/08--time_to_pay.m4a'),
         filename: '08--time_to_pay.m4a',
      },
   )
   song09 = Song.create!(
      song_title: 'Dreamland',
      artist_id: pentakill[:id],
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_pentakill_1.jpg'),
         filename: 'album_pentakill_1.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/09--dreamland.m4a'),
         filename: '09--dreamland.m4a',
      },
   )
   song10 = Song.create!(
      artist_id: pentakill[:id],
      song_title: 'Bury The Clone',
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_pentakill_1.jpg'),
         filename: 'album_pentakill_1.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/10--bury_the_clone.m4a'),
         filename: '10--bury_the_clone.m4a',
      },
   )
   song11 = Song.create!(
      artist_id: pentakill[:id],
      song_title: 'Surface',
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_pentakill_2.png'),
         filename: 'album_pentakill_2.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/11--surface.m4a'),
         filename: '11--surface.m4a',
      },
   )
   song12 = Song.create!(
      artist_id: pentakill[:id],
      song_title: "Where I'm Waiting",
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_pentakill_2.png'),
         filename: 'album_pentakill_2.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/12--where_im_waiting.m4a'),
         filename: '12--where_im_waiting.m4a',
      },
   )
   song13 = Song.create!(
      artist_id: pentakill[:id],
      song_title: 'By My Side',
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_pentakill_3.jpg'),
         filename: 'album_pentakill_3.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/13--by_my_side.mp3'),
         filename: '13--by_my_side.mp3',
      },
   )
   song14 = Song.create!(
      artist_id: pentakill[:id],
      song_title: 'Out of Breath',
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_pentakill_3.jpg'),
         filename: 'album_pentakill_3.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/14--out_of_breath.mp3'),
         filename: '14--out_of_breath.mp3',
      },
   )
   song15 = Song.create!(
      artist_id: etc[:id],
      song_title: 'Savage Blood',
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_wow_1.jpg'),
         filename: 'album_wow_1.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/15--savage_blood.mp3'),
         filename: '15--savage_blood.mp3',
      },
   )
   song16 = Song.create!(
      artist_id: etc[:id],
      song_title: 'Un-named',
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_wow_1.jpg'),
         filename: 'album_wow_1.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/16--un_named.mp3'),
         filename: '16--un_named.mp3',
      },
   )
   song17 = Song.create!(
      artist_id: etc[:id],
      song_title: 'Lies',
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_wow_1.jpg'),
         filename: 'album_wow_1.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/17--lies.m4a'),
         filename: '17--lies.m4a',
      },
   )
   song18 = Song.create!(
      artist_id: etc[:id],
      song_title: 'Lightbringer',
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_wow_2.jpg'),
         filename: 'album_wow_2.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/18--lightbringer.mp3'),
         filename: '18--lightbringer.mp3',
      },
   )
   song19 = Song.create!(
      song_title: 'Punting Gnomes',
      artist_id: etc[:id],
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_wow_2.jpg'),
         filename: 'album_wow_2.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/19--ohmwrecker.mp3'),
         filename: '19--ohmwrecker.mp3',
      },
   )
   song20 = Song.create!(
      song_title: "The Prophecy",
      artist_id: etc[:id],
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_wow_3.jpg'),
         filename: 'album_wow_3.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/20--the_prophecy.mp3'),
         filename: '20--the_prophecy.mp3',
      },
   )
   song21 = Song.create!(
      song_title: 'Deathfire Grasp',
      artist_id: etc[:id],
      album_img: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/album_imgs/album_wow_3.jpg'),
         filename: 'album_wow_3.jpg',
      },
      audio_file: {
         io: open('https://s3-us-west-1.amazonaws.com/audio-caelum-dev/songs/21--deathfire_grasp.mp3'),
         filename: '21--deathfire_grasp.mp3',
      },
   )
end

# profile_img: {io: open('URL_FOR_AWS'), filename:'pic.png'}
# album_img: {io: open('URL_FOR_AWS'), filename:'pic.png'}
# audio_file: {io: open('URL_FOR_AWS'), filename:'song.mp3'}

# (prod/dev)bucket > permissions > tab

# Original artist for THRALL: https://lawrencedraaws.artstation.com/projects/4eo0L
