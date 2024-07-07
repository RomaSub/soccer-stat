setup:
	npm ci
	npm run build

start:
	npm run dev

lint:
	npx eslint .

fix:
	npx prettier . --write
	npx eslint --fix .
