import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/ja";

export default (app) => {
  app.use(ElementPlus, { locale });
};
