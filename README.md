# 内容管理系统小程序

内容管理系统Pay相关模块。

<p align="center">
  <a href="./README.md">简体中文</a> | 
  <a href="./README_cn.md">English</a>
</p>

<div align="center">
  <br>
  <img src="https://github.com/umi-AIGC-saas/umi_ai_cms_mini_frontend/blob/main/assets/v1.png" alt="platform multimodal">
</div>


**体验地址**：[https://ai.umi6.com](https://ai.umi6.com)


### 🚀 运行步骤

#### **1. 环境准备**
- **必备工具**：  
  - 确保已安装 [HBuilder X](https://www.dcloud.io/hbuilderx.html)（建议使用最新稳定版）  
  - 安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)（HBuilder X 运行小程序需依赖此工具）

#### **2. 项目配置**
- **步骤 1：导入项目**  
  打开 HBuilder X → 点击菜单栏 **文件 → 导入项目** → 选择项目根目录 → 点击 **确定**  

- **步骤 2：配置小程序 AppID**  
  - 登录 [微信公众平台](https://mp.weixin.qq.com) → 进入 **小程序管理后台** → 在 **设置 → 基本设置** 中获取 AppID  
  - 在 HBuilder X 中，打开项目根目录下的 `manifest.json` → 切换到 **微信小程序配置** 标签 → 填入获取的 **AppID**（如图所示）  
  ![AppID 配置示例](https://img.dcloud.net.cn/static/doc/img/mp-weapp-appid.png)（示意图，实际以界面为准）

#### **3. 运行至小程序**
- **一键运行**：  
  点击 HBuilder X 工具栏中的 **运行** 按钮 → 选择 **运行到微信开发者工具**  
  - 首次运行时，系统会自动关联已安装的微信开发者工具（若未关联，需手动选择工具安装路径）  
  - 微信开发者工具将自动启动并加载项目，等待编译完成即可在模拟器/真机中预览



## 🎉 Stay Tuned

⭐️ Star our repository to stay up-to-date with exciting new features and improvements! Get instant notifications for new
releases! 🌟

<div align="center" style="margin-top:20px;margin-bottom:20px;">
<img src="https://github.com/umi-AIGC-saas/umi_ai_cms_mini_frontend/blob/main/assets/v1.gif" width="1200"/>
</div>




## 模块导航

### 多端及功能模块仓库
| 模块类型       | 模块名称       | 代码仓库链接                          | 说明                  |
|----------------|----------------|---------------------------------------|-----------------------|
| 前端平台       | PC 端前端      | [platform_multimodal_frontend](https://github.com/UMIntelligence/platform_multimodal_frontend)        | PC 端前端代码仓库     |
|                | 小程序端       | [umi_platform_mini_program](https://github.com/ymzn3820/umi_platform_mini_program)    | 微信小程序代码仓库    |
|                | H5 端          | [umi_platform_h5](https://github.com/ymzn3820/umi_platform_h5)                     | H5 移动端代码仓库     |
| 后端功能模块   | 支付模块       | [umi_platform_pay_module](https://github.com/ymzn3820/umi_platform_pay_module)       | 支付系统核心模块      |
|                | 用户模块       | [umi_platform_user_module](https://github.com/ymzn3820/umi_platform_user_module)       | 用户中心服务模块      |
|                | Chat 模块      | [umi_platform_chat_module](https://github.com/ymzn3820/umi_platform_chat_module)      | 即时通讯核心模块      |



## 许可证
本项目采用 **BSD 3 - Clause License** 开源协议，详情见 [LICENSE](LICENSE) 文件。

