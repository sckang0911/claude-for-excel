// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  courseSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '課程地圖',
    },
    {
      type: 'html',
      value: '<div class="sidebar-stage-label">階段一｜個人操作</div>',
    },
    {
      type: 'category',
      label: 'Level 1 [讀] 從表格讀出答案',
      collapsed: false,
      items: ['L1/L101','L1/L102','L1/L103','L1/L104','L1/L105'],
    },
    {
      type: 'category',
      label: 'Level 2 [找] 找出資料中的問題',
      collapsed: true,
      items: ['L2/L201','L2/L202','L2/L203','L2/L204','L2/L205'],
    },
    {
      type: 'html',
      value: '<div class="sidebar-stage-label">階段二｜工具應用</div>',
    },
    {
      type: 'category',
      label: 'Level 3 [算] 讓 Excel 自動運算',
      collapsed: true,
      items: ['L3/L301','L3/L302','L3/L303','L3/L304','L3/L305'],
    },
    {
      type: 'category',
      label: 'Level 4 [畫] 把數字變成圖',
      collapsed: true,
      items: ['L4/L401','L4/L402','L4/L403','L4/L404','L4/L405'],
    },
    {
      type: 'html',
      value: '<div class="sidebar-stage-label">階段三｜整合查核</div>',
    },
    {
      type: 'category',
      label: 'Level 5 [合] 跨表整合與比對',
      collapsed: true,
      items: ['L5/L501','L5/L502','L5/L503','L5/L504','L5/L505'],
    },
    {
      type: 'category',
      label: 'Level 6 [查] 對帳、稽核、驗證',
      collapsed: true,
      items: ['L6/L601','L6/L602','L6/L603','L6/L604','L6/L605'],
    },
    {
      type: 'html',
      value: '<div class="sidebar-stage-label">階段四｜報告決策</div>',
    },
    {
      type: 'category',
      label: 'Level 7 [報] 管理報表與摘要',
      collapsed: true,
      items: ['L7/L701','L7/L702','L7/L703','L7/L704','L7/L705'],
    },
    {
      type: 'category',
      label: 'Level 8 [測] 預測、模型、決策',
      collapsed: true,
      items: ['L8/L801','L8/L802','L8/L803','L8/L804','L8/L805'],
    },
  ],
};

module.exports = sidebars;
