import { Container } from "react-bootstrap";
import Footer from "../footer/footer";

function Contact(){
    return(
        <>
        <Container>
            <h2 className="my-4">تماس</h2>
            <p className="fs-5 fw-bold">پشتیبانی وب‌سایت فرانت کست در روزهای غیر تعطیل هفته آماده پاسخگویی به دانشجویان گرامی است. همین طور برای مشاوره، می‌توانید از راه‌های ارتباطی با ما استفاده کنید.</p>
            <p className="fs-5">ارتباط در تلگرام: MasoodSadri</p>
            <p className="fs-5">ایمیل: sadri.masood [at] gmail.com</p>
            <hr />
        <Footer/>
        </Container>
        </>
    )
}
export default Contact;