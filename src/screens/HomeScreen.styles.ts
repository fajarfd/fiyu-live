import { Platform, StyleSheet } from 'react-native';
import { colors } from '../theme';

export interface CategoryItem {
  id: string;
  label: string;
}

export interface LiveRoom {
  id: string;
  title: string;
  hostName: string;
  avatarInitials: string;
  avatarBg: string;
  viewerCount: number;
}

export type NavTabId = 'beranda' | 'jelajah' | 'pesan' | 'profil';

export interface NavItem {
  id: NavTabId;
  label: string;
  icon: 'home' | 'compass' | 'message-square' | 'user';
}

// Data kategori yang ringkas untuk perulangan chip
export const CATEGORIES: CategoryItem[] = [
  { id: 'for_you', label: 'Untuk kamu' },
  { id: 'chat', label: 'Ngobrol' },
  { id: 'music', label: 'Musik' },
  { id: 'curhat', label: 'Curhat' },
];

// Data live room sesuai desain Fiyu Live Claude
export const LIVE_ROOMS: LiveRoom[] = [
  {
    id: 'room-1',
    title: 'Ngobrol santai malam',
    hostName: 'Fitri',
    avatarInitials: 'FR',
    avatarBg: colors.lavender,
    viewerCount: 128,
  },
  {
    id: 'room-2',
    title: 'Curhat tengah malam',
    hostName: 'Rani',
    avatarInitials: 'RN',
    avatarBg: colors.accent,
    viewerCount: 64,
  },
  {
    id: 'room-3',
    title: 'Musik akustik',
    hostName: 'Dimas',
    avatarInitials: 'DM',
    avatarBg: colors.avatarOrange,
    viewerCount: 52,
  },
  {
    id: 'room-4',
    title: 'Belajar bareng',
    hostName: 'Fajar',
    avatarInitials: 'FJ',
    avatarBg: colors.avatarPurple,
    viewerCount: 40,
  },
];

// Item navigasi bawah untuk perulangan tab
export const NAV_ITEMS: NavItem[] = [
  { id: 'beranda', label: 'Beranda', icon: 'home' },
  { id: 'jelajah', label: 'Jelajah', icon: 'compass' },
  { id: 'pesan', label: 'Pesan', icon: 'message-square' },
  { id: 'profil', label: 'Profil', icon: 'user' },
];

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 44 : 24,
  },
  scrollContent: {
    paddingBottom: 24,
  },

  /* Header */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.lavender,
  },
  brandAccent: {
    color: colors.accent,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },

  /* Categories Chips */
  categoryScroll: {
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 12,
    gap: 8,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: colors.surface,
  },
  chipActive: {
    backgroundColor: colors.lavender,
  },
  chipText: {
    fontSize: 13,
    color: colors.muted,
    fontWeight: '500',
  },
  chipTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  /* Section Header */
  sectionTitle: {
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },

  /* Live Room Grid */
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  card: {
    width: '48%',
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 12,
    flexDirection: 'column',
    gap: 6,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  liveBadge: {
    backgroundColor: colors.liveBadge,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 999,
  },
  liveBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  viewerCount: {
    fontSize: 12,
    color: colors.muted,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 6,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.background,
  },
  roomTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  hostName: {
    fontSize: 12,
    color: colors.muted,
  },

  /* Banner CTA Card */
  bannerCard: {
    width: '100%',
    backgroundColor: colors.bannerBackground,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  bannerInfo: {
    flex: 1,
    paddingRight: 12,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  bannerSubtitle: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 2,
  },
  bannerButton: {
    backgroundColor: colors.lavender,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
  },
  bannerButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  /* Bottom Navigation Bar */
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 24 : 12,
    backgroundColor: colors.navBackground,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },
  navItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    minWidth: 48,
  },
  navLabel: {
    fontSize: 11,
    color: colors.muted,
    fontWeight: '500',
  },
  navLabelActive: {
    color: colors.lavender,
    fontWeight: '700',
  },
  fabButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
});
