import React, {useState, useEffect} from 'react';

import {useWindowSize} from '../../hooks/useWindowSize';

import {PosterCarusel} from './PosterCarusel';

// import './Poster.css';
import './Poster.sass';

import {posters} from '../../data/posters';

const PosterDescriptionContainer = ({title, discrip}) =>
  <div className='poster__description-container'>
    <p className='poster__title_detailed'>
      {title}
    </p>
    <span className='poster__description'>
      {discrip}
    </span>
  </div>;

const PosterTagsContainer = ({tags}) =>
  <div className='poster__tags-container'>
    {tags.map((item, i)=>
      <PosterTag key={i} text={item}/>,
    )}
  </div>;

const PosterTag = ({text})=>{
  return (
    <div className='poster__tag'>{text}</div>
  );
};

const PosterImg = ({src}) => <img className='poster__img' src={src}></img>;

const PosterFooter = ({title}) =>
  <div className='poster__footer '>
    <IconBorderBig/>
    <span className='poster__title'>
      {title}
    </span>
  </div>;

const TempBigPoster = ({title, tags, img}) =>{
  return (
    <div className='poster poster_big'>
      <PosterTagsContainer tags={tags}/>
      <PosterFooter title={title}/>
      <PosterImg src={img}/>
    </div>
  );
};

const TempSmallPoster = ({title, tags, img}) =>{
  return (
    <div className='poster poster_small'>
      <PosterTagsContainer tags={tags}/>
      <PosterFooter title={title}/>
      <PosterImg src={img}/>
    </div>
  );
};

const TempDetailedPoster = ({tags, img, title, discrip}) =>{
  return (
    <div className='poster poster_size-small'>
      <div className='poster__img-container' >
        <PosterTagsContainer tags={tags}/>
        <PosterImg src={img}/>
        {/* <img className='poster__img noradius' src={img}></img> */}
      </div>
      <PosterDescriptionContainer title={title} discrip={discrip}/>
    </div>
  );
};


const Poster = (props) =>{
  const {discrip, index, isOnlySmall, isBig} = props;
  if (index==0&&!isOnlySmall) {
    return <TempBigPoster {...props}/>;
  } else if (!!discrip) {
    return <TempDetailedPoster {...props}/>;
  } else if (!isBig) {
    return <TempSmallPoster {...props}/>;
  }
  return null;
};

const PosterContainer = () =>{
  const [size, setSize] = useState(7);
  const windowSize = useWindowSize();
  const [isOnlySmall, setIsOnlySmall] = useState(false);

  useEffect(()=>{
    if (windowSize.width<720) {
      setSize(3);
    } else if (windowSize.width>=720&&windowSize.width<900) {
      // setIsOnlySmall(true);
      setSize(4);
    } else if (windowSize.width>=900&&windowSize.width<1190) {
      setSize(6);
    } else {
      setSize(8);
    }
    //  else if (windowSize.width<=1023) {
    //   // setIsOnlySmall(true);
    //   setSize(4);
    // } else if (windowSize.width>1023&&windowSize.width<=1285) {
    //   setIsOnlySmall(false);
    //   setSize(5);
    // } else if (windowSize.width>1286&&windowSize.width<=1305) {
    //   setIsOnlySmall(false);
    //   setSize(6);
    // } else if (windowSize.width>1305) {
    //   setIsOnlySmall(false);
    //   setSize(7);
    // }
  }, [windowSize.width]);

  return (
    <div className='poster__container'>
      {
        posters.map((item, i)=>
          i<size?<Poster isOnlySmall={isOnlySmall} index={i} key={i} {...item}/>:null,
        )
      }
    </div>
  );
};

const IconBorder = () => <svg width="155" height="15" viewBox="0 0 155 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M77.4932 1.09091H73.2597C73.1785 1.09091 73.1515 1.06364 73.1515 0.981818V0H70V4.09091C70 4.21364 70.0676 4.26818 70.2029 4.26818H71.6772L75.505 15H77.4932H79.495L83.3093 4.26818H84.7971C84.9324 4.26818 85 4.21364 85 4.09091V0H81.8485V0.981818C81.8485 1.06364 81.8079 1.09091 81.7268 1.09091H77.4932ZM77.4932 10.8545C77.4121 10.8545 77.3445 10.8 77.3174 10.7045L75.1262 4.52727C75.0992 4.45909 75.0992 4.40455 75.1398 4.35C75.1803 4.29545 75.2344 4.26818 75.3021 4.26818H77.4932H79.6979C79.7656 4.26818 79.8061 4.29545 79.8467 4.35C79.8873 4.40455 79.9008 4.45909 79.8738 4.52727L77.6826 10.7045C77.6555 10.8 77.5879 10.8545 77.4932 10.8545Z" fill="white"/>
  <path d="M0 7H30H60" stroke="white"/>
  <path d="M95 7H125H155" stroke="white"/>
</svg>;


const IconBorderBig = () => <svg width="235" height="15" viewBox="0 0 235 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 8H50H100" stroke="white"/>
  <path d="M117.493 1.09091H113.26C113.179 1.09091 113.151 1.06364 113.151 0.981818V0H110V4.09091C110 4.21364 110.068 4.26818 110.203 4.26818H111.677L115.505 15H117.493H119.495L123.309 4.26818H124.797C124.932 4.26818 125 4.21364 125 4.09091V0H121.849V0.981818C121.849 1.06364 121.808 1.09091 121.727 1.09091H117.493ZM117.493 10.8545C117.412 10.8545 117.344 10.8 117.317 10.7045L115.126 4.52727C115.099 4.45909 115.099 4.40455 115.14 4.35C115.18 4.29545 115.234 4.26818 115.302 4.26818H117.493H119.698C119.766 4.26818 119.806 4.29545 119.847 4.35C119.887 4.40455 119.901 4.45909 119.874 4.52727L117.683 10.7045C117.656 10.8 117.588 10.8545 117.493 10.8545Z" fill="white"/>
  <path d="M135 8H185H235" stroke="white"/>
</svg>;

export {PosterCarusel, PosterContainer, Poster};
