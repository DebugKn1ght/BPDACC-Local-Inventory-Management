-- BPDACC Inventory Management - Initial Database Schema
-- For Supabase PostgreSQL
-- Created: 2026-07-10

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- 1. Offices Table
-- ==========================================
CREATE TABLE IF NOT EXISTS offices (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================
-- 2. Users Table
-- ==========================================
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role VARCHAR(50) NOT NULL CHECK (role IN ('Admin', 'Nurse', 'Pharmacist', 'Lab Tech')),
    office_id BIGINT REFERENCES offices(id),
    status VARCHAR(20) NOT NULL DEFAULT 'Active' CHECK (status IN ('Active', 'Inactive')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================
-- 3. Inventory Items Table
-- ==========================================
CREATE TABLE IF NOT EXISTS inventory_items (
    id BIGSERIAL PRIMARY KEY,
    sku VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    min_stock INTEGER NOT NULL DEFAULT 0,
    unit VARCHAR(50) NOT NULL DEFAULT 'Pieces',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================
-- 4. Inventory Batches Table
-- ==========================================
CREATE TABLE IF NOT EXISTS inventory_batches (
    id BIGSERIAL PRIMARY KEY,
    inventory_item_id BIGINT NOT NULL REFERENCES inventory_items(id) ON DELETE CASCADE,
    batch_id VARCHAR(100) NOT NULL,
    brand VARCHAR(255),
    supplier VARCHAR(255),
    stock_number VARCHAR(100),
    expiry_date DATE,
    office_id BIGINT REFERENCES offices(id),
    stock INTEGER NOT NULL DEFAULT 0,
    transaction_count INTEGER NOT NULL DEFAULT 0,
    ptr VARCHAR(100),
    cost_per_unit DECIMAL(10, 2),
    remarks TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Unique constraint per inventory item
    UNIQUE(inventory_item_id, batch_id)
);

-- ==========================================
-- 5. Inventory Transactions Table
-- ==========================================
CREATE TABLE IF NOT EXISTS inventory_transactions (
    id BIGSERIAL PRIMARY KEY,
    inventory_item_id BIGINT NOT NULL REFERENCES inventory_items(id) ON DELETE CASCADE,
    inventory_batch_id BIGINT REFERENCES inventory_batches(id) ON DELETE SET NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    reference VARCHAR(100),
    receipt_qty INTEGER NOT NULL DEFAULT 0,
    issuance_qty INTEGER NOT NULL DEFAULT 0,
    balance INTEGER NOT NULL,
    office_id BIGINT REFERENCES offices(id),
    ptr VARCHAR(100),
    cost_per_unit DECIMAL(10, 2),
    remarks TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================
-- 6. Requisitions Table
-- ==========================================
CREATE TABLE IF NOT EXISTS requisitions (
    id BIGSERIAL PRIMARY KEY,
    ris_no VARCHAR(100) NOT NULL UNIQUE,
    request_date DATE NOT NULL DEFAULT CURRENT_DATE,
    requested_by_id BIGINT REFERENCES users(id),
    role VARCHAR(50),
    office_id BIGINT REFERENCES offices(id),
    purpose TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Approved', 'Rejected')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================
-- 7. Requisition Items Table
-- ==========================================
CREATE TABLE IF NOT EXISTS requisition_items (
    id BIGSERIAL PRIMARY KEY,
    requisition_id BIGINT NOT NULL REFERENCES requisitions(id) ON DELETE CASCADE,
    inventory_item_id BIGINT REFERENCES inventory_items(id),
    item_name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    unit VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================
-- 8. Activities Table
-- ==========================================
CREATE TABLE IF NOT EXISTS activities (
    id BIGSERIAL PRIMARY KEY,
    item VARCHAR(255),
    office VARCHAR(100),
    action VARCHAR(100) NOT NULL,
    type VARCHAR(50) CHECK (type IN ('issued', 'expired', 'warning', 'allocated', 'added')),
    time VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================
-- INDEXES for better performance
-- ==========================================
CREATE INDEX idx_inventory_batches_item ON inventory_batches(inventory_item_id);
CREATE INDEX idx_inventory_transactions_item ON inventory_transactions(inventory_item_id);
CREATE INDEX idx_inventory_transactions_batch ON inventory_transactions(inventory_batch_id);
CREATE INDEX idx_requisition_items_req ON requisition_items(requisition_id);
CREATE INDEX idx_requisitions_status ON requisitions(status);

-- ==========================================
-- TRIGGERS for updated_at auto-updates
-- ==========================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to all tables with updated_at column
CREATE TRIGGER update_offices_updated_at BEFORE UPDATE ON offices
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_inventory_items_updated_at BEFORE UPDATE ON inventory_items
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_inventory_batches_updated_at BEFORE UPDATE ON inventory_batches
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_inventory_transactions_updated_at BEFORE UPDATE ON inventory_transactions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_requisitions_updated_at BEFORE UPDATE ON requisitions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_requisition_items_updated_at BEFORE UPDATE ON requisition_items
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ==========================================
-- INSERT DEFAULT DATA
-- ==========================================

-- Insert default offices
INSERT INTO offices (name, description) VALUES
('Hemodialysis', 'Dialysis Unit'),
('Clinical Laboratory', 'Lab Testing'),
('Radiology', 'Imaging Department'),
('Admin Office', 'Administration'),
('Unallocated', 'Unassigned Stock')
ON CONFLICT (name) DO NOTHING;

-- Insert default users
INSERT INTO users (name, email, role, office_id, status) VALUES
('John Doe', 'john@clinic.com', 'Admin', NULL, 'Active'),
('Jane Smith', 'jane@clinic.com', 'Nurse', (SELECT id FROM offices WHERE name='Hemodialysis'), 'Active'),
('Mike Johnson', 'mike@clinic.com', 'Pharmacist', (SELECT id FROM offices WHERE name='Admin Office'), 'Active'),
('Sarah Williams', 'sarah@clinic.com', 'Lab Tech', (SELECT id FROM offices WHERE name='Clinical Laboratory'), 'Inactive')
ON CONFLICT (email) DO NOTHING;
