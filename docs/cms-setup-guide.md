# Decap CMS Setup Guide

## Current Status: ⚠️ **AUTHENTICATION NEEDED**

The CMS is configured but requires authentication setup to function properly.

---

## 🔧 **What's Been Configured:**

### ✅ **Content Collections Set Up:**
- **Pages**: Homepage, About, Process, Industries (with full SEO fields)
- **Equipment**: All equipment types with images, features, and specifications
- **SEO Integration**: Title tags, meta descriptions, alt text for all content
- **Image Management**: Proper image upload and metadata handling

### ✅ **Features Implemented:**
- Complete content editing for all pages
- Image upload and management
- SEO metadata fields on every page
- Team member management
- Equipment specifications and features
- Process steps editing

---

## 🚨 **Authentication Issues to Fix:**

### **Problem**: "Unable to log in to Decap CMS"

### **Solution Options:**

#### **Option 1: Netlify Identity (Recommended for Netlify hosting)**
1. **Enable Netlify Identity** in your Netlify dashboard:
   - Go to Site Settings → Identity
   - Click "Enable Identity"
   - Set registration to "Invite only"
   - Enable Git Gateway under Services

2. **Add yourself as a user**:
   - Go to Identity tab in Netlify dashboard
   - Click "Invite users"
   - Enter your email address
   - Accept the invitation email

3. **Test login**:
   - Visit `https://your-site.netlify.app/admin`
   - Log in with your invited email

#### **Option 2: GitHub OAuth (Alternative)**
1. **Create GitHub OAuth App**:
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Click "New OAuth App"
   - Set Authorization callback URL to: `https://api.netlify.com/auth/done`

2. **Configure in Netlify**:
   - Go to Site Settings → Access control → OAuth
   - Add GitHub as provider
   - Enter Client ID and Secret from GitHub app

#### **Option 3: Local Development (For testing)**
Already configured with `local_backend: true` in config.yml

To use locally:
```bash
# Install Decap CMS proxy
npm install -g @decap/cli

# Run the proxy
npx decap-server

# In another terminal, run your site
npm run dev

# Access CMS at localhost:4321/admin
```

---

## 📝 **How to Use the CMS (Once Authenticated):**

### **Content Editing Workflow:**

1. **Access the CMS**: Visit `/admin` on your live site
2. **Edit Pages**: Click "Pages" → Select page to edit
3. **Manage Equipment**: Click "Equipment" → Add/edit equipment
4. **Preview Changes**: Use the preview pane
5. **Publish**: Click "Publish" to commit changes to GitHub

### **SEO Management:**
- Every page has Title and Meta Description fields
- Images have alt text fields for accessibility
- Content is automatically optimized for search engines

### **Content That's Fully Editable:**
- ✅ All headlines and copy
- ✅ Hero sections on every page
- ✅ Team member bios and photos
- ✅ Equipment descriptions and features
- ✅ Process steps
- ✅ Industry benefits
- ✅ All CTAs and button text

---

## ⚙️ **Technical Details:**

### **File Structure:**
```
public/admin/config.yml          # CMS configuration
src/content/config.ts            # Content type definitions
src/content/pages/              # Page content files
src/content/equipment/          # Equipment content files
src/assets/uploads/             # CMS uploaded images
```

### **GitHub Integration:**
- All changes go through GitHub
- Each edit creates a commit
- Changes are automatically deployed
- Content versioning is handled by Git

---

## 🚀 **Next Steps to Enable CMS:**

### **Immediate Action Required:**
1. **Choose authentication method** (Netlify Identity recommended)
2. **Set up authentication** following Option 1 above
3. **Test login** at your-site.netlify.app/admin
4. **Invite team members** who need content editing access

### **Long-term Benefits:**
- ✅ No more manual markdown editing
- ✅ Visual content editing interface
- ✅ Image upload and management
- ✅ SEO fields built into every page
- ✅ Preview before publishing
- ✅ Team collaboration on content

---

## 🆘 **Troubleshooting:**

### **"Cannot access /admin"**
- Check that you're on the live Netlify site, not localhost
- Verify admin.html page exists at `/admin`

### **"Authentication error"**
- Verify Netlify Identity is enabled
- Check that you've been invited as a user
- Try clearing browser cache

### **"Config file not found"**
- Verify config.yml exists in public/admin/
- Check GitHub repo configuration in config.yml

### **"Cannot save changes"**
- Verify Git Gateway is enabled in Netlify
- Check GitHub permissions
- Ensure you have write access to the repository

---

**Status**: Ready for authentication setup
**Priority**: High - This enables easy content management
**Owner**: Jon (needs to complete authentication setup) 