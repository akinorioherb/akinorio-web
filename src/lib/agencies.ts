export interface Agency {
  id: string;        // 代理店ID (例: AKN001)
  name: string;      // 氏名
  salonName: string; // サロン名等
  couponCode?: string; // (任意) 紐づくクーポンコード
}

export const AGENCIES: Agency[] = [
  { id: 'AKN001', name: '小林千恵', salonName: 'Y;WAVE' },
  { id: 'AKN002', name: '荒木久代', salonName: '美brilliant' },
  { id: 'AKN003', name: '澤崎直美', salonName: '髪質改善縮毛矯正専門店エブリーストレート' },
  { id: 'AKN004', name: '山﨑エツ', salonName: '' },
  { id: 'AKN005', name: '宮城利千子', salonName: '' },
  { id: 'AKN006', name: '石橋彩子', salonName: 'Hanauta' },
  { id: 'AKN007', name: '橋本ゆりか', salonName: 'ドリーム整体院' },
  { id: 'AKN008', name: '金子宏江', salonName: '@parafuse.sasebo.midori' },
  { id: 'AKN009', name: '本田', salonName: '' },
  { id: 'AKN010', name: '寺地翠', salonName: '' },
  { id: 'AKN011', name: '石原', salonName: '美肌サロンきらり' }
];

/**
 * 指定された代理店IDから代理店情報を取得する
 */
export function getAgencyById(id: string): Agency | undefined {
  return AGENCIES.find(agency => agency.id.toUpperCase() === id.toUpperCase());
}
