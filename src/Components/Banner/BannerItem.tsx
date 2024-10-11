import "./_Banner.scss";
interface Iprops {
    url: string;
    title: string;
    desc: string;
}

function BannerItem({url, title, desc}: Iprops) {
  return (
    <div className="bannerItem" style={{backgroundImage: `url(${url})`}}>
        <h2> {title} </h2>
        <p> {desc} </p>
        <button>shop now</button>
    </div>
  )
}

export default BannerItem