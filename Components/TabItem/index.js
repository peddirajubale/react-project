import './index.css'

const TabItem = props => {
  const {tabDetails,updatedTabitem,isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem =()=>{
    updatedTabitem(tabId)
  }

  const activeTabCalssName = isActive?"active-tab-btn":null

  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${activeTabCalssName}`} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
