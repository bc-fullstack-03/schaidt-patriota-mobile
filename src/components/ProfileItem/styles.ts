import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  profileCard: {
    padding: 12,
    borderBottomColor: THEME.COLORS.BORDER,
    borderBottomWidth: 1,
  },

  profileIdentification: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileNameText: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    marginStart: 8,
  },

  followers: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    marginStart: 8,
  },

  following: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    marginStart: 8,
  },

  followButton: {
    backgroundColor: THEME.COLORS.BUTTON,
    padding: 12,
    minWidth: 240,
    alignItems: 'center',
    borderRadius: 12,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
  },
  
  disabledButton: {
    backgroundColor: "gray",
    padding: 12,
    minWidth: 240,
    alignItems: 'center',
    borderRadius: 12,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
  },
});
