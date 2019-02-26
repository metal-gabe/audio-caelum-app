# Gabriel Lujan - Fullstack Project: AudioCaelum (MVP List) 

## FRONTEND COMPONENTS 
  Root 
  * App 
    - Player (if initiated) (overlays everything) 

## FRONTEND ROUTES 
  * `/` 
    - FrontHero 
    - FrontContent 
    - MobileTeaser 
    - CreatorsTeaser 
    - SignupTeaser 
    - FrontFooter 
    - SessionForm (modal) (if initiated) 
    - Player (if initiated) 
  * `/discover` 
    - NavBanner 
    - HomeIndex 
    - SideBar 
    - Player (if initiated) 
  * `/stream` 
    - NavBanner 
    - SongsIndex 
    - SideBar 
    - Player (if initiated) 
  * `/you/library` 
    - NavBanner 
    - LibraryIndex 
    - Player (if initiated) 
  * `/you/likes` 
    - NavBanner 
    - LikesIndex 
    - Player (if initiated) 
  * `/you/following` 
    - NavBanner 
    - FollowsIndex 
    - Player (if initiated) 
  * `/search?q=:searchTerm` (BONUS?) 
    - NavBanner 
    - SearchResults 
      + FilterSideBar 
      + ResultsHeader 
      + SongsIndex 
    - Player (if initiated) 
  * `/:username` 
    - NavBanner 
    - HeroCoverArt 
    - SongsIndex 
    - SideBar 
    - Player (if initiated) 
  * `/:username/edit` 
    - EditProfile (modal) 
  * `/:username/:songTitle` 
    - NavBanner 
    - SongCoverArt 
    - SongShow 
      + CommentsShow 
    - SideBar 
    - Player (if initiated) 
  * `/:username/:songTitle/edit` 
    - EditSong (modal) 
  * `/pro{?ref=t000}` (BONUS) 
    - PremiumForm 
  * `/upload` 
    - NavBanner 
    - Player (if initiated) 
  * `/logout` 
    - NavBanner 
    - MobileApps 
    - Player (if initiated) 
