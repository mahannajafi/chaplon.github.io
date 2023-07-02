import './Upgrade.css'
import pic from '../../assets/imgs/upgrade.png'

function Upgrade() {
  return (
    <div className='upgrade__container'>
      <div className="upgrade__first">
        <div className="upgrade__title">اکانت خود را به طراح ارتقا دهید!</div>
        <div className="upgrade__dec">با ارتقا حساب کاربری خود به طراح میتوانید محصولات منحصر به فرد خود را طراحی کنید و سفارش دهید یا حتی به فروش بگذارید و از طریق آن کسب درآمد کنید.</div>
        <button className="upgrade__button">ارتقا به طراح</button>
      </div>
      <div className="upgrade__second"><img src={pic} alt="" srcset="" /></div>
    </div>
  )
}

export default Upgrade