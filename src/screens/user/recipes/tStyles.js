import { Dimensions, PixelRatio, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
import { COLOR, SIZE } from '../../../utils/Constants';


const tStyles = StyleSheet.create({
  // item detail style
  itemDetailHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: SIZE.APP_BODY_PADDING,
    paddingVertical: SIZE.APP_BODY_PADDING,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.LIGHT_GRAY
  },
  itemDetailBodyBox: {
    marginTop: SIZE.APP_BODY_PADDING,
  },
  itemDetailIngredientBox: {
    marginTop: SIZE.APP_BODY_PADDING,
  },
  itemDetailMethodBox: {
    marginTop: SIZE.APP_BODY_PADDING,
    marginBottom: SIZE.APP_BODY_PADDING * 2,
  },
  itemDetailDescBox: {
    marginTop: SIZE.APP_BODY_PADDING / 2
  },
  itemParamsBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemParam: {
    width: 'auto',
    paddingRight: SIZE.APP_BODY_PADDING
  },


});

export default tStyles;