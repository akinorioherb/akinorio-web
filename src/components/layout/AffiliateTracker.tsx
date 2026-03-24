'use client';

import { Suspense } from 'react';
import useAffiliateTracking from '@/hooks/useAffiliateTracking';

function TrackerInner() {
  useAffiliateTracking();
  return null;
}

/**
 * 代理店アフィリエイトリンクのパラメータ(?ref=XXX)を
 * localStorageに保存するためのクライアントコンポーネント
 */
export default function AffiliateTracker() {
  return (
    <Suspense fallback={null}>
      <TrackerInner />
    </Suspense>
  );
}
