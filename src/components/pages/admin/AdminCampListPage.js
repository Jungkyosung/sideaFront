import Style from './AdminCampListPage.module.css';
import { useNavigate } from 'react-router';
import CampaignList from '../../UI/atoms/CampaignList';
import Title from '../../UI/atoms/Title';
import NaviControll from '../../naviControll/NaviControll';

const AdminCampListPage = () => {
  const navigate = useNavigate();

  function handlerNavi(id){
    let location = '/admin/campaign/' + id;
    navigate(location);
  }

  const campProperties = [
    {
      campId : 1,
    campImgSource: "https://i.pinimg.com/564x/73/61/13/736113f91b9513418f1f8af1bdb2e00c.jpg",
    campTitle: "camp타이틀",
    campOrganizer: "camp주최자",
    campProgress: 20
    },
    {
      campImgSource: "https://i.pinimg.com/564x/73/61/13/736113f91b9513418f1f8af1bdb2e00c.jpg",
      campTitle: "camp타이틀",
      campOrganizer: "camp주최자",
      campProgress: 20
    },
    {
      campImgSource: "https://i.pinimg.com/564x/73/61/13/736113f91b9513418f1f8af1bdb2e00c.jpg",
      campTitle: "camp타이틀",
      campOrganizer: "camp주최자",
      campProgress: 20
    },
    {
      campImgSource: "https://i.pinimg.com/564x/73/61/13/736113f91b9513418f1f8af1bdb2e00c.jpg",
      campTitle: "camp타이틀",
      campOrganizer: "camp주최자",
      campProgress: 20
    },
    {
      campImgSource: "https://i.pinimg.com/564x/73/61/13/736113f91b9513418f1f8af1bdb2e00c.jpg",
      campTitle: "camp타이틀",
      campOrganizer: "camp주최자",
      campProgress: 20
    },
    {
      campImgSource: "https://i.pinimg.com/564x/73/61/13/736113f91b9513418f1f8af1bdb2e00c.jpg",
      campTitle: "camp타이틀",
      campOrganizer: "camp주최자",
      campProgress: 20
    },
    {
      campImgSource: "https://i.pinimg.com/564x/73/61/13/736113f91b9513418f1f8af1bdb2e00c.jpg",
      campTitle: "camp타이틀",
      campOrganizer: "camp주최자",
      campProgress: 20
    },
    {
      campImgSource: "https://i.pinimg.com/564x/73/61/13/736113f91b9513418f1f8af1bdb2e00c.jpg",
      campTitle: "camp타이틀",
      campOrganizer: "camp주최자",
      campProgress: 20
    },
    {
      campImgSource: "https://i.pinimg.com/564x/73/61/13/736113f91b9513418f1f8af1bdb2e00c.jpg",
      campTitle: "camp타이틀",
      campOrganizer: "camp주최자",
      campProgress: 20
    }
  ]

  return (
    <>
      <NaviControll>
        <div className={Style.container}>
          <Title titleName={"캠페인 목록"} />
          
          <div className={Style.listbox}>
            <div className={Style.scrollbox}>
              {campProperties.map(camplist => (
                <CampaignList
                campClick={()=>handlerNavi(camplist.campId)}
                campImgSource={camplist.campImgSource}
                campTitle={camplist.campTitle}
                campOrganizer={camplist.campOrganizer}
                campProgress={camplist.campProgress}
                />
              ))}
            </div>
          </div>
        </div>

      </NaviControll>
    </>
  )
}
export default AdminCampListPage;