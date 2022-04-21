import * as React from 'react';
import * as images from './images';
import _ from 'lodash';
import './index.scss'
export const LazyLoadingImgContainer:React.FC<{}> = () => {
  const observerRef = React.useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, intersectionRatio,isIntersecting } = entry;
        if (intersectionRatio > 0) {
          const _target = target as HTMLImageElement;
          _target.src = _target.dataset["src"] ?? "";
          _target.onload = () => {
            _target.style.opacity = "1";
          };
          observerRef.current.unobserve(_target);
        }
      });
    })
  );
  React.useEffect(() => {
    Array.from(document.getElementsByTagName("img")).forEach(element => {
      observerRef.current.observe(element)
    });
    return () => {
      observerRef.current.disconnect()
    }
  },[])
  return (
    <div className='container'>
      {
        _.values(images).map((item,index) => {
          return (
              <img src={undefined} alt="" data-src={item} style={{ opacity: "0", transition: ".3s",marginBottom: "20px" }} width={1920} height={1080}/>
          )
        })
      }
    </div>
  )
}