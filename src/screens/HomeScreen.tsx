import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../theme';
import {
  CATEGORIES,
  NAV_ITEMS,
  styles,
} from './HomeScreen.styles';
import { UseHomeScreenProps, useHomeScreen } from './useHomeScreen';

export type HomeScreenProps = UseHomeScreenProps;

export default function HomeScreen(props: HomeScreenProps = {}) {
  const {
    selectedCategory,
    activeTab,
    liveRooms,
    handleCategorySelect,
    handleTabSelect,
    handleSearch,
    handleNotification,
    handleRoomPress,
    handleStartLive,
  } = useHomeScreen(props);

  return (
    <View style={styles.screen}>
      <View style={styles.safeArea}>
        {/* Header Bar */}
        <View style={styles.headerRow}>
          <Text style={styles.brandTitle}>
            Fiyu <Text style={styles.brandAccent}>Live</Text>
          </Text>
          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleSearch}
              activeOpacity={0.7}
              accessibilityLabel="Cari"
            >
              <Feather name="search" size={22} color={colors.text} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleNotification}
              activeOpacity={0.7}
              accessibilityLabel="Notifikasi"
            >
              <Feather name="bell" size={22} color={colors.text} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Scrollable Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Filter Kategori - Loop Ringkas */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScroll}
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <TouchableOpacity
                  key={category.id}
                  style={[styles.chip, isActive && styles.chipActive]}
                  onPress={() => handleCategorySelect(category.id)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.chipText,
                      isActive && styles.chipTextActive,
                    ]}
                  >
                    {category.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Judul Bagian */}
          <Text style={styles.sectionTitle}>Sedang live</Text>

          {/* Grid Live Room - Loop Ringkas & Banner CTA */}
          <View style={styles.gridContainer}>
            {liveRooms.map((room) => (
              <TouchableOpacity
                key={room.id}
                style={styles.card}
                onPress={() => handleRoomPress(room)}
                activeOpacity={0.85}
              >
                <View style={styles.cardTopRow}>
                  <View style={styles.liveBadge}>
                    <Text style={styles.liveBadgeText}>LIVE</Text>
                  </View>
                  <Text style={styles.viewerCount}>{room.viewerCount}</Text>
                </View>

                <View style={[styles.avatar, { backgroundColor: room.avatarBg }]}>
                  <Text style={styles.avatarText}>{room.avatarInitials}</Text>
                </View>

                <Text style={styles.roomTitle} numberOfLines={1}>
                  {room.title}
                </Text>
                <Text style={styles.hostName} numberOfLines={1}>
                  {room.hostName}
                </Text>
              </TouchableOpacity>
            ))}

            {/* Banner CTA Mulai Live */}
            <View style={styles.bannerCard}>
              <View style={styles.bannerInfo}>
                <Text style={styles.bannerTitle}>Mulai live pertamamu</Text>
                <Text style={styles.bannerSubtitle}>
                  Buka room suara dalam 1 menit
                </Text>
              </View>
              <TouchableOpacity
                style={styles.bannerButton}
                onPress={handleStartLive}
                activeOpacity={0.8}
              >
                <Text style={styles.bannerButtonText}>Mulai</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Bottom Navigation Bar - Loop Ringkas dengan Tombol FAB Center */}
      <View style={styles.navBar}>
        {NAV_ITEMS.map((item, index) => {
          const isActive = activeTab === item.id;
          return (
            <React.Fragment key={item.id}>
              {index === 2 && (
                <TouchableOpacity
                  style={styles.fabButton}
                  onPress={handleStartLive}
                  activeOpacity={0.85}
                  accessibilityLabel="Mulai live"
                >
                  <Feather name="plus" size={26} color={colors.background} />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.navItem}
                onPress={() => handleTabSelect(item.id)}
                activeOpacity={0.7}
              >
                <Feather
                  name={item.icon}
                  size={22}
                  color={isActive ? colors.lavender : colors.muted}
                />
                <Text
                  style={[
                    styles.navLabel,
                    isActive && styles.navLabelActive,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
}
