const d = document,
  w = window;

export function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breackpoint = w.matchMedia(mq);

  const responsive = (e) => {
    d.getElementById(id).innerHTML = e.matches ? desktopContent : mobileContent;
  };

  breackpoint.addListener(responsive);
  responsive(breackpoint);
}
