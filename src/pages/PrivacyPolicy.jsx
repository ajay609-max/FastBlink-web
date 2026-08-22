function PrivacyPolicy() {
  const section = { marginBottom: '22px' }
  const h2 = { fontSize: '15px', fontWeight: 500, color: '#fff', margin: '0 0 8px' }
  const p = { fontSize: '13.5px', color: '#aaa', margin: '0 0 8px', lineHeight: 1.6 }
  const li = { fontSize: '13.5px', color: '#aaa', lineHeight: 1.6, marginBottom: '6px' }

  return (
    <div style={{ padding: '24px 16px' }}>
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 500, color: '#fff', margin: '0 0 6px' }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '13px', color: '#888', margin: 0 }}>Last updated: August 2026</p>
      </div>

      <div style={{ maxWidth: '440px', margin: '0 auto' }}>
        <p style={p}>
          This policy explains what information FastBlink collects and how it is used.
          FastBlink is an independently developed messaging app for Android.
        </p>

        <div style={section}>
          <h2 style={h2}>Information We Collect</h2>
          <ul style={{ paddingLeft: '18px', margin: 0 }}>
            <li style={li}>
              <strong style={{ color: '#ddd' }}>Account information:</strong> your chosen username and
              login credentials, managed through Firebase Authentication.
            </li>
            <li style={li}>
              <strong style={{ color: '#ddd' }}>Messages and presence:</strong> chat messages,
              online/typing/seen status, and friend connections, stored in a Firebase Realtime
              Database so the app can deliver and sync your chats.
            </li>
            <li style={li}>
              <strong style={{ color: '#ddd' }}>Push notification token:</strong> a Firebase Cloud
              Messaging token used solely to deliver chat notifications to your device.
            </li>
            <li style={li}>
              <strong style={{ color: '#ddd' }}>Media files:</strong> photos, videos, and other
              attachments you send are stored in your own connected Google Drive account, not on our
              servers. FastBlink only requests access to files it creates itself (Google
              "drive.file" scope) and cannot see or modify your other Drive files.
            </li>
          </ul>
        </div>

        <div style={section}>
          <h2 style={h2}>How Information Is Used</h2>
          <p style={p}>
            Data collected is used only to operate core app features: authenticating you,
            delivering messages and notifications, displaying your friends list and chat history,
            and storing the media you choose to send.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>Data Sharing</h2>
          <p style={p}>
            We do not sell or share your personal information with third parties. Messages are
            visible only to the participants of a given conversation, enforced through database
            access rules.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>Data Retention &amp; Deletion</h2>
          <p style={p}>
            You can delete your account at any time from Settings. Deleting your account removes
            your profile, friend connections, chat history, and authentication record from our
            systems. Media stored in your own Google Drive is not affected, since it remains under
            your control.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>Third-Party Services</h2>
          <p style={p}>
            FastBlink relies on Firebase (Google) for authentication, database, and notifications,
            and on Google Drive for media storage. Use of these services is subject to Google's own
            privacy policy.
          </p>
        </div>

        <div style={section}>
          <h2 style={h2}>Contact</h2>
          <p style={p}>
            Questions about this policy can be sent to the developer at the support email listed on
            the app's distribution listing.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
