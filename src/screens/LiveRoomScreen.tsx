import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { colors } from '../theme';
import {
  GIFT_ITEMS,
  styles,
} from './LiveRoomScreen.styles';
import {
  UseLiveRoomScreenProps,
  useLiveRoomScreen,
} from './useLiveRoomScreen';

export type LiveRoomScreenProps = UseLiveRoomScreenProps;

export default function LiveRoomScreen(props: LiveRoomScreenProps = {}) {
  const {
    roomTitle,
    listenerCount,
    hostName,
    hostInitials,
    isMuted,
    messages,
    speakers,
    inputText,
    setInputText,
    isGiftModalVisible,
    toggleMute,
    handleSendMessage,
    handleSendGift,
    openGiftModal,
    closeGiftModal,
    handleTakeSeat,
    handleBack,
  } = useLiveRoomScreen(props);

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView
        style={styles.safeArea}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Header Bar */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            activeOpacity={0.7}
            accessibilityLabel="Kembali"
          >
            <Feather name="chevron-left" size={26} color={colors.text} />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.roomTitle}>{roomTitle}</Text>
            <Text style={styles.listenerCount}>{listenerCount} pendengar</Text>
          </View>

          <View style={styles.liveBadge}>
            <Text style={styles.liveBadgeText}>LIVE</Text>
          </View>
        </View>

        {/* Host Avatar & Identitas */}
        <View style={styles.hostSection}>
          <View style={styles.hostAvatar}>
            <Text style={styles.hostAvatarText}>{hostInitials}</Text>
          </View>
          <Text style={styles.hostName}>{hostName}</Text>
          <Text style={styles.hostStatus}>Host, sedang bicara</Text>
        </View>

        {/* Barisan Co-host / Pembicara - Loop Ringkas */}
        <View style={styles.speakersRow}>
          {speakers.map((sp) => (
            <View
              key={sp.id}
              style={[styles.speakerAvatar, { backgroundColor: sp.bgColor }]}
            >
              <Text style={styles.speakerText}>{sp.initials}</Text>
            </View>
          ))}

          {/* Kursi Kosong (Ambil / Ajukan Panggung) */}
          <TouchableOpacity
            style={styles.emptySeat}
            onPress={handleTakeSeat}
            activeOpacity={0.7}
            accessibilityLabel="Kursi kosong"
          >
            <Feather name="plus" size={22} color={colors.muted} />
          </TouchableOpacity>
        </View>

        {/* Daftar Pesan Live Chat - Loop Ringkas */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.chatContainer}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.messageBubble,
                msg.isGift && styles.giftMessageBubble,
              ]}
            >
              <Text style={styles.messageText}>
                <Text style={[styles.senderText, { color: msg.senderColor }]}>
                  {msg.senderName}
                </Text>{' '}
                {msg.text}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Input Bar & Tombol Aksi Bawah */}
        <View style={styles.bottomRow}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Ketik pesan"
              placeholderTextColor={colors.muted}
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={handleSendMessage}
              returnKeyType="send"
            />
            {inputText.trim().length > 0 && (
              <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSendMessage}
                activeOpacity={0.7}
              >
                <Feather name="send" size={18} color={colors.accent} />
              </TouchableOpacity>
            )}
          </View>

          {/* Tombol Mikrofon Toggle */}
          <TouchableOpacity
            style={[
              styles.actionButton,
              isMuted && styles.actionButtonActive,
            ]}
            onPress={toggleMute}
            activeOpacity={0.8}
            accessibilityLabel="Mikrofon"
          >
            <Feather
              name={isMuted ? 'mic-off' : 'mic'}
              size={20}
              color={colors.text}
            />
          </TouchableOpacity>

          {/* Tombol Kirim Gift */}
          <TouchableOpacity
            style={[styles.actionButton, styles.giftButton]}
            onPress={openGiftModal}
            activeOpacity={0.8}
            accessibilityLabel="Kirim gift"
          >
            <Feather name="gift" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* Modal Pemilihan Gift - Loop Ringkas */}
      <Modal
        visible={isGiftModalVisible}
        transparent
        animationType="slide"
        onRequestClose={closeGiftModal}
      >
        <TouchableWithoutFeedback onPress={closeGiftModal}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Kirim Gift Dukungan</Text>
                  <TouchableOpacity onPress={closeGiftModal} activeOpacity={0.7}>
                    <Feather name="x" size={22} color={colors.muted} />
                  </TouchableOpacity>
                </View>

                {/* Grid Pilihan Gift */}
                <View style={styles.giftGrid}>
                  {GIFT_ITEMS.map((gift) => (
                    <TouchableOpacity
                      key={gift.id}
                      style={styles.giftCard}
                      onPress={() => handleSendGift(gift)}
                      activeOpacity={0.75}
                    >
                      <Text style={styles.giftIcon}>{gift.icon}</Text>
                      <Text style={styles.giftName}>{gift.name}</Text>
                      <Text style={styles.giftCoin}>{gift.coin} koin</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
