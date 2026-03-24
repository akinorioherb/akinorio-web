'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export const AFFILIATE_REF_KEY = 'akinorio_agency_ref';
export const AFFILIATE_REF_EXPIRY_KEY = 'akinorio_agency_ref_expiry';
const EXPIRY_DAYS = 30; // 30日間保持

export default function useAffiliateTracking() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // クライアントサイドでのみ実行
    if (typeof window === 'undefined') return;

    const refId = searchParams?.get('ref');

    if (refId) {
      // localStorageに代理店IDと有効期限を保存
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + EXPIRY_DAYS);

      localStorage.setItem(AFFILIATE_REF_KEY, refId);
      localStorage.setItem(AFFILIATE_REF_EXPIRY_KEY, expiryDate.getTime().toString());
    }
  }, [searchParams]);
}

/**
 * 有効な代理店IDをlocalStorageから取得する
 */
export function getStoredAffiliateRef(): string | null {
  if (typeof window === 'undefined') return null;

  const storedRef = localStorage.getItem(AFFILIATE_REF_KEY);
  const storedExpiry = localStorage.getItem(AFFILIATE_REF_EXPIRY_KEY);

  if (!storedRef || !storedExpiry) return null;

  const expiryTime = parseInt(storedExpiry, 10);
  if (new Date().getTime() > expiryTime) {
    // 期限切れの場合は削除
    localStorage.removeItem(AFFILIATE_REF_KEY);
    localStorage.removeItem(AFFILIATE_REF_EXPIRY_KEY);
    return null;
  }

  return storedRef;
}
