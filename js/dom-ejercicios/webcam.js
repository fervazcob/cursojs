const d = document,
  n = navigator;

export function webcam(id) {
  const $video = d.getElementById(id);

  if (n.mediaDevices) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML("beforeBegin", `<p><mark>${err}</mark></p>`);
        console.error(err);
      });
  }
}
