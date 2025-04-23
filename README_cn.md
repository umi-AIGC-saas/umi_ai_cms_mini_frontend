# Mini Program for Content Management System

The Pay-related module of the Content Management System.

<p align="center">
  <a href="./README.md">简体中文</a> | 
  <a href="./README_cn.md">English</a>
</p>

<div align="center">
  <br>
  <img src="https://github.com/umi-AIGC-saas/umi_ai_cms_mini_frontend/blob/main/assets/v1.png" alt="platform multimodal">
</div>

**Experience Address**: [https://ai.umi6.com](https://ai.umi6.com)

### 🚀 Running Steps

#### **1. Environment Preparation**
- **Required Tools**:
  - Make sure [HBuilder X](https://www.dcloud.io/hbuilderx.html) is installed (it is recommended to use the latest stable version).
  - Install [WeChat Developer Tools](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) (HBuilder X depends on this tool to run mini programs).

#### **2. Project Configuration**
- **Step 1: Import the Project**
  Open HBuilder X → Click **File → Import Project** in the menu bar → Select the project root directory → Click **OK**.

- **Step 2: Configure the Mini Program AppID**
  - Log in to [WeChat Public Platform](https://mp.weixin.qq.com) → Enter the **Mini Program Management Background** → Obtain the AppID in **Settings → Basic Settings**.
  - In HBuilder X, open `manifest.json` in the project root directory → Switch to the **WeChat Mini Program Configuration** tab → Fill in the obtained **AppID** (as shown in the figure).
  ![AppID Configuration Example](https://img.dcloud.net.cn/static/doc/img/mp-weapp-appid.png) (Schematic diagram, subject to the actual interface).

#### **3. Run in the Mini Program**
- **One-click Run**:
  Click the **Run** button in the HBuilder X toolbar → Select **Run to WeChat Developer Tools**.
  - When running for the first time, the system will automatically associate the installed WeChat Developer Tools (if not associated, you need to manually select the tool installation path).
  - The WeChat Developer Tools will automatically start and load the project. Wait for the compilation to complete, and then you can preview it in the simulator/real device.

## 🎉 Stay Tuned

⭐️ Star our repository to stay up-to-date with exciting new features and improvements! Get instant notifications for new releases! 🌟

<div align="center" style="margin-top:20px;margin-bottom:20px;">
  <img src="https://github.com/umi-AIGC-saas/umi_ai_cms_mini_frontend/blob/main/assets/v1.gif" width="1200"/>
</div>

## Module Navigation

### Multi-terminal and Functional Module Repositories
| Module Type | Module Name | Code Repository Link | Description |
| --- | --- | --- | --- |
| Front-end Platform | PC Front-end | [platform_multimodal_frontend](https://github.com/UMIntelligence/platform_multimodal_frontend) | PC front-end code repository |
|  | Mini Program End | [umi_platform_mini_program](https://github.com/ymzn3820/umi_platform_mini_program) | WeChat mini program code repository |
|  | H5 End | [umi_platform_h5](https://github.com/ymzn3820/umi_platform_h5) | H5 mobile code repository |
| Back-end Functional Module | Payment Module | [umi_platform_pay_module](https://github.com/ymzn3820/umi_platform_pay_module) | Core module of the payment system |
|  | User Module | [umi_platform_user_module](https://github.com/ymzn3820/umi_platform_user_module) | User center service module |
|  | Chat Module | [umi_platform_chat_module](https://github.com/ymzn3820/umi_platform_chat_module) | Core module of instant messaging |

## License
This project uses the **BSD 3 - Clause License** open-source license. For details, see the [LICENSE](LICENSE) file.