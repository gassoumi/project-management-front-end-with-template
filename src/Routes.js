import React, {lazy, Suspense, Fragment} from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';

import {ThemeProvider} from '@material-ui/styles';

import {ClimbingBoxLoader} from 'react-spinners';

import MuiTheme from './theme';

// Layout Blueprints

import {
  LeftSidebar,
  CollapsedSidebar,
  MinimalLayout,
  PresentationLayout
} from './layout-blueprints';

// Example Pages

import PagesLogin from './example-pages/PagesLogin';
import Login from './my-components/account/Login';
import PagesRegister from './example-pages/PagesRegister';
import PagesRecoverPassword from './example-pages/PagesRecoverPassword';
import PagesProfile from './example-pages/PagesProfile';
import PagesInvoice from './example-pages/PagesInvoice';
import PagesError404 from './example-pages/PagesError404';
import MyPageError404 from './my-components/common/PagesError404';

import PagesError500 from './example-pages/PagesError500';
import PagesError505 from './example-pages/PagesError505';
import Buttons from './example-pages/Buttons';
import Dropdowns from './example-pages/Dropdowns';
import NavigationMenus from './example-pages/NavigationMenus';
import Avatars from './example-pages/Avatars';
import ProgressBars from './example-pages/ProgressBars';
import Ratings from './example-pages/Ratings';
import Pagination from './example-pages/Pagination';
import Ribbons from './example-pages/Ribbons';
import Scrollable from './example-pages/Scrollable';
import Badges from './example-pages/Badges';
import Icons from './example-pages/Icons';
import Timelines from './example-pages/Timelines';
import UtilitiesHelpers from './example-pages/UtilitiesHelpers';
import Countup from './example-pages/Countup';
import RegularTables1 from './example-pages/RegularTables1';
import RegularTables2 from './example-pages/RegularTables2';
import RegularTables3 from './example-pages/RegularTables3';
import RegularTables4 from './example-pages/RegularTables4';
import RegularTables5 from './example-pages/RegularTables5';
import FormsControls from './example-pages/FormsControls';
import FormsDualListbox from './example-pages/FormsDualListbox';
import FormsToggleSwitch from './example-pages/FormsToggleSwitch';

import PrivateRoute from "./my-components/common/PrivateRoute";
import Entities from './my-components/entities';

const DashboardDefault = lazy(() => import('./example-pages/DashboardDefault'));
const DashboardAnalytics = lazy(() =>
  import('./example-pages/DashboardAnalytics')
);
const DashboardSales = lazy(() => import('./example-pages/DashboardSales'));
const DashboardReports = lazy(() => import('./example-pages/DashboardReports'));
const DashboardRealEstate = lazy(() =>
  import('./example-pages/DashboardRealEstate')
);
const DashboardServerStatus = lazy(() =>
  import('./example-pages/DashboardServerStatus')
);
const DashboardProjects = lazy(() =>
  import('./example-pages/DashboardProjects')
);
const DashboardHelpdesk = lazy(() =>
  import('./example-pages/DashboardHelpdesk')
);
const DashboardCustomers = lazy(() =>
  import('./example-pages/DashboardCustomers')
);
const DashboardCryptocurrency = lazy(() =>
  import('./example-pages/DashboardCryptocurrency')
);
const DashboardCrmManager = lazy(() =>
  import('./example-pages/DashboardCrmManager')
);
const DashboardContent = lazy(() => import('./example-pages/DashboardContent'));
const ApplicationsCalendar = lazy(() =>
  import('./example-pages/ApplicationsCalendar')
);
const ApplicationsChat = lazy(() => import('./example-pages/ApplicationsChat'));
const ApplicationsContacts = lazy(() =>
  import('./example-pages/ApplicationsContacts')
);
const ApplicationsFileManager = lazy(() =>
  import('./example-pages/ApplicationsFileManager')
);
const ApplicationsMail = lazy(() => import('./example-pages/ApplicationsMail'));
const ApplicationsProjects = lazy(() =>
  import('./example-pages/ApplicationsProjects')
);

const ApplicationsWidgets = lazy(() =>
  import('./example-pages/ApplicationsWidgets')
);
const Cards1 = lazy(() => import('./example-pages/Cards1'));
const Cards2 = lazy(() => import('./example-pages/Cards2'));
const Cards3 = lazy(() => import('./example-pages/Cards3'));
const Cards4 = lazy(() => import('./example-pages/Cards4'));
const Cards5 = lazy(() => import('./example-pages/Cards5'));
const Cards6 = lazy(() => import('./example-pages/Cards6'));
const Cards7 = lazy(() => import('./example-pages/Cards7'));
const Cards8 = lazy(() => import('./example-pages/Cards8'));
const Cards9 = lazy(() => import('./example-pages/Cards9'));
const Cards10 = lazy(() => import('./example-pages/Cards10'));
const Cards11 = lazy(() => import('./example-pages/Cards11'));
const Cards12 = lazy(() => import('./example-pages/Cards12'));
const LandingPage = lazy(() => import('./example-pages/LandingPage'));
const FeatureSections = lazy(() => import('./example-pages/FeatureSections'));
const IconBoxes = lazy(() => import('./example-pages/IconBoxes'));
const PricingTables = lazy(() => import('./example-pages/PricingTables'));
const HeaderSections = lazy(() => import('./example-pages/HeaderSections'));
const TestimonialsSections = lazy(() =>
  import('./example-pages/TestimonialsSections')
);
const BlogSections = lazy(() => import('./example-pages/BlogSections'));
const PartnersSections = lazy(() => import('./example-pages/PartnersSections'));
const CtaBoxes = lazy(() => import('./example-pages/CtaBoxes'));
const FooterSections = lazy(() => import('./example-pages/FooterSections'));
const HeroSections = lazy(() => import('./example-pages/HeroSections'));
const Accordions = lazy(() => import('./example-pages/Accordions'));
const Modals = lazy(() => import('./example-pages/Modals'));
const Notifications = lazy(() => import('./example-pages/Notifications'));
const DragDrop = lazy(() => import('./example-pages/DragDrop'));
const Calendars = lazy(() => import('./example-pages/Calendars'));
const Carousels = lazy(() => import('./example-pages/Carousels'));
const Popovers = lazy(() => import('./example-pages/Popovers'));
const TreeView = lazy(() => import('./example-pages/TreeView'));
const Tabs = lazy(() => import('./example-pages/Tabs'));
const GuidedTours = lazy(() => import('./example-pages/GuidedTours'));
const ImageCrop = lazy(() => import('./example-pages/ImageCrop'));
const LoadingIndicators = lazy(() =>
  import('./example-pages/LoadingIndicators')
);
const ContextMenus = lazy(() => import('./example-pages/ContextMenus'));
const DynamicTables2 = lazy(() => import('./example-pages/DynamicTables2'));
const FormsWizard = lazy(() => import('./example-pages/FormsWizard'));
const FormsClipboard = lazy(() => import('./example-pages/FormsClipboard'));
const FormsColorpicker = lazy(() => import('./example-pages/FormsColorpicker'));
const FormsDatepicker = lazy(() => import('./example-pages/FormsDatepicker'));
const FormsInputMask = lazy(() => import('./example-pages/FormsInputMask'));
const FormsInputSelect = lazy(() => import('./example-pages/FormsInputSelect'));
const FormsSlider = lazy(() => import('./example-pages/FormsSlider'));
const FormsTextareaAutosize = lazy(() =>
  import('./example-pages/FormsTextareaAutosize')
);
const FormsTimepicker = lazy(() => import('./example-pages/FormsTimepicker'));
const FormsTypeahead = lazy(() => import('./example-pages/FormsTypeahead'));
const FormsUpload = lazy(() => import('./example-pages/FormsUpload'));
const FormsValidation = lazy(() => import('./example-pages/FormsValidation'));
const FormsWysiwygEditor = lazy(() =>
  import('./example-pages/FormsWysiwygEditor')
);
const ApexCharts = lazy(() => import('./example-pages/ApexCharts'));
const GaugesCharts = lazy(() => import('./example-pages/GaugesCharts'));
const ChartjsCharts = lazy(() => import('./example-pages/ChartjsCharts'));
const SparklinesCharts = lazy(() => import('./example-pages/SparklinesCharts'));
const Maps = lazy(() => import('./example-pages/Maps'));
const ListGroups = lazy(() => import('./example-pages/ListGroups'));


export const SuspenseLoading = () => {
  return (
    <Fragment>
      <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
        <div className="d-flex align-items-center flex-column px-4">
          <ClimbingBoxLoader color={'#5383ff'} loading={true}/>
        </div>
        <div className="text-muted font-size-xl text-center pt-3">
          Veuillez patienter pendant le chargement
        </div>
      </div>
    </Fragment>
  );
};

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };


  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense fallback={<SuspenseLoading/>}>
          <Switch>
            <Redirect exact from="/" to="/dashboard"/>
            <Route path={['/LandingPage']}>
              <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/LandingPage" component={LandingPage}/>
                  </motion.div>
                </Switch>
              </PresentationLayout>
            </Route>

            <Route
              path={[
                '/ApplicationsCalendar',
                '/ApplicationsChat',
                '/ApplicationsContacts',
                '/ApplicationsFileManager',
                '/ApplicationsMail'
              ]}>
              <CollapsedSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route
                      path="/ApplicationsCalendar"
                      component={ApplicationsCalendar}
                    />
                    <Route
                      path="/ApplicationsChat"
                      component={ApplicationsChat}
                    />
                    <Route
                      path="/ApplicationsContacts"
                      component={ApplicationsContacts}
                    />
                    <Route
                      path="/ApplicationsFileManager"
                      component={ApplicationsFileManager}
                    />
                    <Route
                      path="/ApplicationsMail"
                      component={ApplicationsMail}
                    />
                  </motion.div>
                </Switch>
              </CollapsedSidebar>
            </Route>

            <Route
              path={[
                '/PagesLogin',
                '/login',
                '/PagesRegister',
                '/PagesRecoverPassword',
                '/PagesError404',
                '/PagesError500',
                '/PagesError505'
              ]}>
              <MinimalLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/PagesLogin" component={PagesLogin}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/PagesRegister" component={PagesRegister}/>
                    <Route
                      path="/PagesRecoverPassword"
                      component={PagesRecoverPassword}
                    />
                    <Route path="/PagesError404" component={PagesError404}/>
                    <Route path="/PagesError500" component={PagesError500}/>
                    <Route path="/PagesError505" component={PagesError505}/>
                  </motion.div>
                </Switch>
              </MinimalLayout>
            </Route>

            <Route
              path={[
                '/DashboardDefault',
                '/DashboardAnalytics',
                '/DashboardSales',
                '/DashboardReports',
                '/DashboardRealEstate',
                '/DashboardServerStatus',
                '/DashboardProjects',
                '/DashboardHelpdesk',
                '/DashboardCustomers',
                '/DashboardCryptocurrency',
                '/DashboardCrmManager',
                '/DashboardContent',
                '/ApplicationsProjects',
                '/ApplicationsWidgets',
                '/PagesProfile',
                '/PagesInvoice',
                '/Buttons',
                '/Dropdowns',
                '/NavigationMenus',
                '/Avatars',
                '/ProgressBars',
                '/Ratings',
                '/Pagination',
                '/Ribbons',
                '/Scrollable',
                '/Badges',
                '/Icons',
                '/Timelines',
                '/UtilitiesHelpers',
                '/Cards1',
                '/Cards2',
                '/Cards3',
                '/Cards4',
                '/Cards5',
                '/Cards6',
                '/Cards7',
                '/Cards8',
                '/Cards9',
                '/Cards10',
                '/Cards11',
                '/Cards12',
                '/FeatureSections',
                '/IconBoxes',
                '/PricingTables',
                '/HeaderSections',
                '/TestimonialsSections',
                '/BlogSections',
                '/PartnersSections',
                '/CtaBoxes',
                '/FooterSections',
                '/HeroSections',
                '/Accordions',
                '/Modals',
                '/Notifications',
                '/DragDrop',
                '/Calendars',
                '/Carousels',
                '/Popovers',
                '/TreeView',
                '/Tabs',
                '/GuidedTours',
                '/ImageCrop',
                '/LoadingIndicators',
                '/Countup',
                '/ContextMenus',
                '/RegularTables1',
                '/RegularTables2',
                '/RegularTables3',
                '/RegularTables4',
                '/RegularTables5',
                '/DynamicTables2',
                '/FormsControls',
                '/FormsWizard',
                '/FormsClipboard',
                '/FormsColorpicker',
                '/FormsDatepicker',
                '/FormsDualListbox',
                '/FormsInputMask',
                '/FormsInputSelect',
                '/FormsSlider',
                '/FormsTextareaAutosize',
                '/FormsTimepicker',
                '/FormsToggleSwitch',
                '/FormsTypeahead',
                '/FormsUpload',
                '/FormsValidation',
                '/FormsWysiwygEditor',
                '/ApexCharts',
                '/GaugesCharts',
                '/ChartjsCharts',
                '/SparklinesCharts',
                '/Maps',
                '/ListGroups',
                // '/project',
              ]}>
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route
                      path="/DashboardDefault"
                      component={DashboardDefault}
                    />
                    <Route
                      path="/DashboardAnalytics"
                      component={DashboardAnalytics}
                    />
                    <Route path="/DashboardSales" component={DashboardSales}/>
                    <Route
                      path="/DashboardReports"
                      component={DashboardReports}
                    />
                    <Route
                      path="/DashboardRealEstate"
                      component={DashboardRealEstate}
                    />
                    <Route
                      path="/DashboardServerStatus"
                      component={DashboardServerStatus}
                    />
                    <Route
                      path="/DashboardProjects"
                      component={DashboardProjects}
                    />
                    <Route
                      path="/DashboardHelpdesk"
                      component={DashboardHelpdesk}
                    />
                    <Route
                      path="/DashboardCustomers"
                      component={DashboardCustomers}
                    />
                    <Route
                      path="/DashboardCryptocurrency"
                      component={DashboardCryptocurrency}
                    />
                    <Route
                      path="/DashboardCrmManager"
                      component={DashboardCrmManager}
                    />
                    <Route
                      path="/DashboardContent"
                      component={DashboardContent}
                    />
                    <Route
                      path="/ApplicationsProjects"
                      component={ApplicationsProjects}
                    />
                    <Route
                      path="/ApplicationsWidgets"
                      component={ApplicationsWidgets}
                    />
                    <Route path="/PagesProfile" component={PagesProfile}/>
                    <Route path="/PagesInvoice" component={PagesInvoice}/>
                    <Route path="/Buttons" component={Buttons}/>
                    <Route path="/Dropdowns" component={Dropdowns}/>
                    <Route
                      path="/NavigationMenus"
                      component={NavigationMenus}
                    />
                    <Route path="/Avatars" component={Avatars}/>
                    <Route path="/ProgressBars" component={ProgressBars}/>
                    <Route path="/Ratings" component={Ratings}/>
                    <Route path="/Pagination" component={Pagination}/>
                    <Route path="/Ribbons" component={Ribbons}/>
                    <Route path="/Scrollable" component={Scrollable}/>
                    <Route path="/Badges" component={Badges}/>
                    <Route path="/Icons" component={Icons}/>
                    <Route path="/Timelines" component={Timelines}/>
                    <Route
                      path="/UtilitiesHelpers"
                      component={UtilitiesHelpers}
                    />
                    <Route path="/Cards1" component={Cards1}/>
                    <Route path="/Cards2" component={Cards2}/>
                    <Route path="/Cards3" component={Cards3}/>
                    <Route path="/Cards4" component={Cards4}/>
                    <Route path="/Cards5" component={Cards5}/>
                    <Route path="/Cards6" component={Cards6}/>
                    <Route path="/Cards7" component={Cards7}/>
                    <Route path="/Cards8" component={Cards8}/>
                    <Route path="/Cards9" component={Cards9}/>
                    <Route path="/Cards10" component={Cards10}/>
                    <Route path="/Cards11" component={Cards11}/>
                    <Route path="/Cards12" component={Cards12}/>
                    <Route
                      path="/FeatureSections"
                      component={FeatureSections}
                    />
                    <Route path="/IconBoxes" component={IconBoxes}/>
                    <Route path="/PricingTables" component={PricingTables}/>
                    <Route path="/HeaderSections" component={HeaderSections}/>
                    <Route
                      path="/TestimonialsSections"
                      component={TestimonialsSections}
                    />
                    <Route path="/BlogSections" component={BlogSections}/>
                    <Route
                      path="/PartnersSections"
                      component={PartnersSections}
                    />
                    <Route path="/CtaBoxes" component={CtaBoxes}/>
                    <Route path="/FooterSections" component={FooterSections}/>
                    <Route path="/HeroSections" component={HeroSections}/>
                    <Route path="/Accordions" component={Accordions}/>
                    <Route path="/Modals" component={Modals}/>
                    <Route path="/Notifications" component={Notifications}/>
                    <Route path="/DragDrop" component={DragDrop}/>
                    <Route path="/Calendars" component={Calendars}/>
                    <Route path="/Carousels" component={Carousels}/>
                    <Route path="/Popovers" component={Popovers}/>
                    <Route path="/TreeView" component={TreeView}/>
                    <Route path="/Tabs" component={Tabs}/>
                    <Route path="/GuidedTours" component={GuidedTours}/>
                    <Route path="/ImageCrop" component={ImageCrop}/>
                    <Route
                      path="/LoadingIndicators"
                      component={LoadingIndicators}
                    />
                    <Route path="/Countup" component={Countup}/>
                    <Route path="/ContextMenus" component={ContextMenus}/>
                    <Route path="/RegularTables1" component={RegularTables1}/>
                    <Route path="/RegularTables2" component={RegularTables2}/>
                    <Route path="/RegularTables3" component={RegularTables3}/>
                    <Route path="/RegularTables4" component={RegularTables4}/>
                    <Route path="/RegularTables5" component={RegularTables5}/>
                    <Route path="/DynamicTables2" component={DynamicTables2}/>
                    <Route path="/FormsControls" component={FormsControls}/>
                    <Route path="/FormsWizard" component={FormsWizard}/>
                    <Route path="/FormsClipboard" component={FormsClipboard}/>
                    <Route
                      path="/FormsColorpicker"
                      component={FormsColorpicker}
                    />
                    <Route
                      path="/FormsDatepicker"
                      component={FormsDatepicker}
                    />
                    <Route
                      path="/FormsDualListbox"
                      component={FormsDualListbox}
                    />
                    <Route path="/FormsInputMask" component={FormsInputMask}/>
                    <Route
                      path="/FormsInputSelect"
                      component={FormsInputSelect}
                    />
                    <Route path="/FormsSlider" component={FormsSlider}/>
                    <Route
                      path="/FormsTextareaAutosize"
                      component={FormsTextareaAutosize}
                    />
                    <Route
                      path="/FormsTimepicker"
                      component={FormsTimepicker}
                    />
                    <Route
                      path="/FormsToggleSwitch"
                      component={FormsToggleSwitch}
                    />
                    <Route path="/FormsTypeahead" component={FormsTypeahead}/>
                    <Route path="/FormsUpload" component={FormsUpload}/>
                    <Route
                      path="/FormsValidation"
                      component={FormsValidation}
                    />
                    <Route
                      path="/FormsWysiwygEditor"
                      component={FormsWysiwygEditor}
                    />
                    <Route path="/ApexCharts" component={ApexCharts}/>
                    <Route path="/GaugesCharts" component={GaugesCharts}/>
                    <Route path="/ChartjsCharts" component={ChartjsCharts}/>
                    <Route
                      path="/SparklinesCharts"
                      component={SparklinesCharts}
                    />
                    <Route path="/Maps" component={Maps}/>
                    <Route path="/ListGroups" component={ListGroups}/>
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>
            <Route path={[
              '/dashboard',
              '/project',
              '/sprint',
              '/task',
              '/document',
              '/discussion',
              '/note',
              '/problem',
            ]}>
              <PrivateRoute path="/" component={Entities}/>
            </Route>
            <Route path='*'>
              <MinimalLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="*" component={MyPageError404}/>
                  </motion.div>
                </Switch>
              </MinimalLayout>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
