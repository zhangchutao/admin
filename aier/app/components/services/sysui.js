/**
 * Created by xRain on 15/9/1.
 */
angular.module('myapp')
    .service('sysui', function ($http, $q, $localStorage, $location) {
        return{
            error: function(data){
                alert(data);
            },
            loadui: function(){
                handleDraggablePanel();
                handleLocalStorage();
                handleResetLocalStorage();
                handleSlimScroll();
                handleSidebarMenu();
                handleMobileSidebarToggle();
                handleSidebarMinify();
                handleMobileSidebar();
                handleThemePageStructureControl();
                handleThemePanelExpand();
                handleAfterPageLoadAddClass();
                handlePanelAction();
                handelTooltipPopoverActivation();
                handleScrollToTopButton();
                handlePageContentView();
                handleIEFullHeightContent();
                handleUnlimitedTabsRender();
            }
        };
    });