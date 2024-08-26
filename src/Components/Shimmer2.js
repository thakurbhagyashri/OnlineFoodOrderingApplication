import React from 'react';

const shimmerStyle = {
  background: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
  backgroundSize: '200% 100%',
  animation: 'shimmer 1.5s infinite'
};

const styles = {
  shimmerLoader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
  },
  shimmerMenuItem: {
    display: 'flex',
    gap: '15px',
    background: '#f0f0f0',
    borderRadius: '8px',
    padding: '15px',
  },
  shimmerImage: {
    width: '100px',
    height: '80px',
    borderRadius: '8px',
    ...shimmerStyle
  },
  shimmerText: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  shimmerTitle: {
    height: '20px',
    width: '70%',
    borderRadius: '4px',
    ...shimmerStyle
  },
  shimmerSubtitle: {
    height: '15px',
    width: '50%',
    borderRadius: '4px',
    ...shimmerStyle
  },
};

const Shimmer2 = ({ itemType }) => {
  return (
    <div style={styles.shimmerLoader}>
      {itemType === 'menu' ? (
        <>
          <div style={styles.shimmerMenuItem}>
            <div style={styles.shimmerImage}></div>
            <div style={styles.shimmerText}>
              <div style={styles.shimmerTitle}></div>
              <div style={styles.shimmerSubtitle}></div>
            </div>
          </div>
          <div style={styles.shimmerMenuItem}>
            <div style={styles.shimmerImage}></div>
            <div style={styles.shimmerText}>
              <div style={styles.shimmerTitle}></div>
              <div style={styles.shimmerSubtitle}></div>
            </div>
          </div>
        </>
      ) : (
        <div style={styles.shimmerMenuItem}>
          <div style={styles.shimmerImage}></div>
          <div style={styles.shimmerText}>
            <div style={styles.shimmerTitle}></div>
            <div style={styles.shimmerSubtitle}></div>
          </div>
        </div>
      )}
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Shimmer2;
