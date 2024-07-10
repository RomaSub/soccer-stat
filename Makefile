setup:
	npm ci
	npm run prepare
	npm run build

start:
	npm run dev

lint:
	npx eslint .

fix:
	npx prettier . --write
	npx eslint --fix .

ansible-setup:
	ansible-playbook -i ansible/inventory/inventory.yml ansible/playbooks/setup.yml

ansible-release:
	ansible-playbook -i ansible/inventory/inventory.yml ansible/playbooks/release.yml --extra-vars "version=latest"

