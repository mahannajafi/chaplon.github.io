import "./Footer.css";
function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__first">
        <div>
        <div className="footer__first-title">پرینتیفای</div>
        <div className="footer__first-dec">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است اساسا مورد استفاده قرار گیرد.
        </div>
        </div>
      </div>
      <div className="footer__second">
        <div>
        <div className="footer__second-title"> درباره ما</div>
        <div className="footer__second-item">مقالات</div>
        <div className="footer__second-item">صفحه آموزش</div>
        <div className="footer__second-item">صفحه اینستاگرام</div>
        </div>
      </div>
      <div className="footer__third">
        <div>
        <div className="footer__third-title">تماس با ما </div>
        <div className="footer__third-item">میدان انقلاب - خیابان کارگر به سمت پارک لاله - کوچه دهقانی - پ7</div>
        <div className="footer__third-item"> شمار تماس:</div>
        <div className="footer__third-item"> آدرس ایمیل:</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
