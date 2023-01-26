import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import {COLOR, SIZE, VIDEO_SKELTON_HEIGHT} from '../../../utils/Constants';

const tStyles = StyleSheet.create({
  // item detail style
  headerBox: {
    paddingBottom: 0,
  },
  itemDetailHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: SIZE.APP_BODY_PADDING,
    paddingTop: SIZE.APP_BODY_PADDING,
  },
  itemDetailDescBox: {
    marginTop: SIZE.APP_BODY_PADDING / 2,
  },
  itemDetailMainBox: {},
  itemDetailButtonBox: {
    paddingHorizontal: SIZE.APP_BODY_PADDING / 2,
    marginBottom: SIZE.APP_BODY_PADDING,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  videoSkelton: {
    height: VIDEO_SKELTON_HEIGHT,
  },
  itemSidebarBoxContent: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

export default tStyles;
