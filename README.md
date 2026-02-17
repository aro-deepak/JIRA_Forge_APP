# JIRA_Forge_APP
JIRA Embedded view


	AroTrace/
  		├── manifest.yml
 		├── src/
  		├── static/
  		└── hello-world/
			├── package.json
        	└── src/


			  

Forge Jira Issue Panel – Deployment & Testing Guide
1️⃣ Install Forge CLI

npm install -g @forge/cli
forge login

2️⃣ Create Forge App

forge create
Select:
	• Custom UI
	• Jira
	• Issue Panel
Move into project:

cd your-app-name

3️⃣ Build Custom UI (Only for Custom UI Apps)

cd static/hello-world
npm install
npm run build
cd ../..
(Skip this step if using UI Kit)

4️⃣ Deploy the App

forge deploy

5️⃣ Install App in Jira

forge install
Select:
	• Your Jira Cloud site
	• Product: Jira
If updating an existing install:

forge install --upgrade

6️⃣ Test in Jira
	1. Open your Jira Cloud site
	2. Open any Issue (e.g., ABC-1)
	3. In the right sidebar → Click Apps
	4. Select your Issue Panel app
	5. Verify it loads successfully

7️⃣ Development Mode (Recommended)
For live testing without redeploying:

forge tunnel
Keep it running, refresh the Jira issue page to see changes.

8️⃣ Debugging
Check logs:

forge logs
                                                    <img width="582" height="1014" alt="image" src="https://github.com/user-attachments/assets/fee867c5-b7a2-4255-aa81-0286ae425a68" />
