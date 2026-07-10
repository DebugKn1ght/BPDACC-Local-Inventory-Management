# BPDACC Inventory - Supabase Setup

## Database Connection Info
- Project URL: `https://pswugdwocltprbjfqoki.supabase.co`
- Publishable Key: `sb_publishable__cOpdxG0am_gwNYZl_y9tw_CI493Fvm`

## How to Apply the Migration

### 1. Using Supabase Dashboard SQL Editor
1. Go to your Supabase project → `SQL Editor`
2. Click `New query`
3. Copy the entire contents of `migrations/001_initial_schema.sql`
4. Paste it into the editor
5. Click `Run`

### 2. Using Supabase CLI (if installed)
```bash
# Link your project first (if not already linked)
supabase link --project-ref pswugdwocltprbjfqoki

# Apply migrations
supabase db push
```

## Database Tables Overview

### Main Tables
1. `offices` - Stores clinic departments (Hemodialysis, Lab, etc.)
2. `users` - User accounts and roles
3. `inventory_items` - Main inventory items (SKU, name, etc.)
4. `inventory_batches` - Individual batches per item
5. `inventory_transactions` - Stock card transaction log
6. `requisitions` - Requisition requests
7. `requisition_items` - Line items for each requisition
8. `activities` - Dashboard activity feed

## Default Data Added
- 5 offices
- 4 sample users (Admin, Nurse, Pharmacist, Lab Tech)

## Next Steps
After setting up the database, you can integrate it into your app using the Supabase JavaScript client!
