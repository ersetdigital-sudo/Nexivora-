-- =============================================
-- Nexivora — Fix RLS for settings table
-- Jalankan di: Supabase Dashboard → SQL Editor
-- =============================================

-- Drop old policies yang require admin_users
DROP POLICY IF EXISTS "Admin update settings" ON settings;
DROP POLICY IF EXISTS "Admin insert settings" ON settings;

-- Allow any authenticated user to insert/update settings
CREATE POLICY "Authenticated insert settings"
  ON settings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated update settings"
  ON settings FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- Also fix admin check in requireAdmin (already done in code)
-- This SQL ensures the DB layer allows authenticated writes
