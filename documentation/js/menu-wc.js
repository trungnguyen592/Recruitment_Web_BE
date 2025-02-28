'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">job_be documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-ddb23a72f3e5784e8a488e36adecce66172505b85a73f1d7214db7cf388e8d474832831da53cb8b511abdd14e7f958937f29d8ce69087a4360281044b3c5f19f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-ddb23a72f3e5784e8a488e36adecce66172505b85a73f1d7214db7cf388e8d474832831da53cb8b511abdd14e7f958937f29d8ce69087a4360281044b3c5f19f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ddb23a72f3e5784e8a488e36adecce66172505b85a73f1d7214db7cf388e8d474832831da53cb8b511abdd14e7f958937f29d8ce69087a4360281044b3c5f19f"' :
                                            'id="xs-controllers-links-module-AppModule-ddb23a72f3e5784e8a488e36adecce66172505b85a73f1d7214db7cf388e8d474832831da53cb8b511abdd14e7f958937f29d8ce69087a4360281044b3c5f19f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-ddb23a72f3e5784e8a488e36adecce66172505b85a73f1d7214db7cf388e8d474832831da53cb8b511abdd14e7f958937f29d8ce69087a4360281044b3c5f19f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-ddb23a72f3e5784e8a488e36adecce66172505b85a73f1d7214db7cf388e8d474832831da53cb8b511abdd14e7f958937f29d8ce69087a4360281044b3c5f19f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ddb23a72f3e5784e8a488e36adecce66172505b85a73f1d7214db7cf388e8d474832831da53cb8b511abdd14e7f958937f29d8ce69087a4360281044b3c5f19f"' :
                                        'id="xs-injectables-links-module-AppModule-ddb23a72f3e5784e8a488e36adecce66172505b85a73f1d7214db7cf388e8d474832831da53cb8b511abdd14e7f958937f29d8ce69087a4360281044b3c5f19f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-41a6242cf9079bb8d941904cde7503cc62b36c7f2f7eac279ed57d381e59f01c4401a200277093371ab98ac14820ef864cf9c62c422680cb531f424615c35092"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-41a6242cf9079bb8d941904cde7503cc62b36c7f2f7eac279ed57d381e59f01c4401a200277093371ab98ac14820ef864cf9c62c422680cb531f424615c35092"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-41a6242cf9079bb8d941904cde7503cc62b36c7f2f7eac279ed57d381e59f01c4401a200277093371ab98ac14820ef864cf9c62c422680cb531f424615c35092"' :
                                            'id="xs-controllers-links-module-AuthModule-41a6242cf9079bb8d941904cde7503cc62b36c7f2f7eac279ed57d381e59f01c4401a200277093371ab98ac14820ef864cf9c62c422680cb531f424615c35092"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-41a6242cf9079bb8d941904cde7503cc62b36c7f2f7eac279ed57d381e59f01c4401a200277093371ab98ac14820ef864cf9c62c422680cb531f424615c35092"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-41a6242cf9079bb8d941904cde7503cc62b36c7f2f7eac279ed57d381e59f01c4401a200277093371ab98ac14820ef864cf9c62c422680cb531f424615c35092"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-41a6242cf9079bb8d941904cde7503cc62b36c7f2f7eac279ed57d381e59f01c4401a200277093371ab98ac14820ef864cf9c62c422680cb531f424615c35092"' :
                                        'id="xs-injectables-links-module-AuthModule-41a6242cf9079bb8d941904cde7503cc62b36c7f2f7eac279ed57d381e59f01c4401a200277093371ab98ac14820ef864cf9c62c422680cb531f424615c35092"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompaniesModule-e51dc869695b7a94ce18634c912704241f4b048912173310e039ddac0bf27b25e015e0966291ce0c0a92ab751fca9c2587f40a94fb0129066e7dd65627346505"' : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-e51dc869695b7a94ce18634c912704241f4b048912173310e039ddac0bf27b25e015e0966291ce0c0a92ab751fca9c2587f40a94fb0129066e7dd65627346505"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-e51dc869695b7a94ce18634c912704241f4b048912173310e039ddac0bf27b25e015e0966291ce0c0a92ab751fca9c2587f40a94fb0129066e7dd65627346505"' :
                                            'id="xs-controllers-links-module-CompaniesModule-e51dc869695b7a94ce18634c912704241f4b048912173310e039ddac0bf27b25e015e0966291ce0c0a92ab751fca9c2587f40a94fb0129066e7dd65627346505"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompaniesModule-e51dc869695b7a94ce18634c912704241f4b048912173310e039ddac0bf27b25e015e0966291ce0c0a92ab751fca9c2587f40a94fb0129066e7dd65627346505"' : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-e51dc869695b7a94ce18634c912704241f4b048912173310e039ddac0bf27b25e015e0966291ce0c0a92ab751fca9c2587f40a94fb0129066e7dd65627346505"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-e51dc869695b7a94ce18634c912704241f4b048912173310e039ddac0bf27b25e015e0966291ce0c0a92ab751fca9c2587f40a94fb0129066e7dd65627346505"' :
                                        'id="xs-injectables-links-module-CompaniesModule-e51dc869695b7a94ce18634c912704241f4b048912173310e039ddac0bf27b25e015e0966291ce0c0a92ab751fca9c2587f40a94fb0129066e7dd65627346505"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatabasesModule-5a5b819649fc6d8ff23d03f313127de185381f38f180aad9957d12b7c1dbf84ad30468d4deac9ddad87e7296898c9eba4a2e2c8d2f19a5402f111b7e2f3899ee"' : 'data-bs-target="#xs-controllers-links-module-DatabasesModule-5a5b819649fc6d8ff23d03f313127de185381f38f180aad9957d12b7c1dbf84ad30468d4deac9ddad87e7296898c9eba4a2e2c8d2f19a5402f111b7e2f3899ee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatabasesModule-5a5b819649fc6d8ff23d03f313127de185381f38f180aad9957d12b7c1dbf84ad30468d4deac9ddad87e7296898c9eba4a2e2c8d2f19a5402f111b7e2f3899ee"' :
                                            'id="xs-controllers-links-module-DatabasesModule-5a5b819649fc6d8ff23d03f313127de185381f38f180aad9957d12b7c1dbf84ad30468d4deac9ddad87e7296898c9eba4a2e2c8d2f19a5402f111b7e2f3899ee"' }>
                                            <li class="link">
                                                <a href="controllers/DatabasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabasesModule-5a5b819649fc6d8ff23d03f313127de185381f38f180aad9957d12b7c1dbf84ad30468d4deac9ddad87e7296898c9eba4a2e2c8d2f19a5402f111b7e2f3899ee"' : 'data-bs-target="#xs-injectables-links-module-DatabasesModule-5a5b819649fc6d8ff23d03f313127de185381f38f180aad9957d12b7c1dbf84ad30468d4deac9ddad87e7296898c9eba4a2e2c8d2f19a5402f111b7e2f3899ee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabasesModule-5a5b819649fc6d8ff23d03f313127de185381f38f180aad9957d12b7c1dbf84ad30468d4deac9ddad87e7296898c9eba4a2e2c8d2f19a5402f111b7e2f3899ee"' :
                                        'id="xs-injectables-links-module-DatabasesModule-5a5b819649fc6d8ff23d03f313127de185381f38f180aad9957d12b7c1dbf84ad30468d4deac9ddad87e7296898c9eba4a2e2c8d2f19a5402f111b7e2f3899ee"' }>
                                        <li class="link">
                                            <a href="injectables/DatabasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesModule-14292308d8c2e25df5b17eca2fb3133903a003d5fd73b4d58125ebdb43fabf67c88cd716fda288f7f368ea73be4be9de4765d3766fed533aaa60435a20cd8013"' : 'data-bs-target="#xs-controllers-links-module-FilesModule-14292308d8c2e25df5b17eca2fb3133903a003d5fd73b4d58125ebdb43fabf67c88cd716fda288f7f368ea73be4be9de4765d3766fed533aaa60435a20cd8013"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-14292308d8c2e25df5b17eca2fb3133903a003d5fd73b4d58125ebdb43fabf67c88cd716fda288f7f368ea73be4be9de4765d3766fed533aaa60435a20cd8013"' :
                                            'id="xs-controllers-links-module-FilesModule-14292308d8c2e25df5b17eca2fb3133903a003d5fd73b4d58125ebdb43fabf67c88cd716fda288f7f368ea73be4be9de4765d3766fed533aaa60435a20cd8013"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-14292308d8c2e25df5b17eca2fb3133903a003d5fd73b4d58125ebdb43fabf67c88cd716fda288f7f368ea73be4be9de4765d3766fed533aaa60435a20cd8013"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-14292308d8c2e25df5b17eca2fb3133903a003d5fd73b4d58125ebdb43fabf67c88cd716fda288f7f368ea73be4be9de4765d3766fed533aaa60435a20cd8013"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-14292308d8c2e25df5b17eca2fb3133903a003d5fd73b4d58125ebdb43fabf67c88cd716fda288f7f368ea73be4be9de4765d3766fed533aaa60435a20cd8013"' :
                                        'id="xs-injectables-links-module-FilesModule-14292308d8c2e25df5b17eca2fb3133903a003d5fd73b4d58125ebdb43fabf67c88cd716fda288f7f368ea73be4be9de4765d3766fed533aaa60435a20cd8013"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobsModule-c5fef80cb5d38bb82127b8aad527434b55a9889056ad4628434386508316d8525e564b97fc4aff60f4d26e23a4382dd630e1e0e08c2dcdd102508efbf268c450"' : 'data-bs-target="#xs-controllers-links-module-JobsModule-c5fef80cb5d38bb82127b8aad527434b55a9889056ad4628434386508316d8525e564b97fc4aff60f4d26e23a4382dd630e1e0e08c2dcdd102508efbf268c450"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobsModule-c5fef80cb5d38bb82127b8aad527434b55a9889056ad4628434386508316d8525e564b97fc4aff60f4d26e23a4382dd630e1e0e08c2dcdd102508efbf268c450"' :
                                            'id="xs-controllers-links-module-JobsModule-c5fef80cb5d38bb82127b8aad527434b55a9889056ad4628434386508316d8525e564b97fc4aff60f4d26e23a4382dd630e1e0e08c2dcdd102508efbf268c450"' }>
                                            <li class="link">
                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-c5fef80cb5d38bb82127b8aad527434b55a9889056ad4628434386508316d8525e564b97fc4aff60f4d26e23a4382dd630e1e0e08c2dcdd102508efbf268c450"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-c5fef80cb5d38bb82127b8aad527434b55a9889056ad4628434386508316d8525e564b97fc4aff60f4d26e23a4382dd630e1e0e08c2dcdd102508efbf268c450"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-c5fef80cb5d38bb82127b8aad527434b55a9889056ad4628434386508316d8525e564b97fc4aff60f4d26e23a4382dd630e1e0e08c2dcdd102508efbf268c450"' :
                                        'id="xs-injectables-links-module-JobsModule-c5fef80cb5d38bb82127b8aad527434b55a9889056ad4628434386508316d8525e564b97fc4aff60f4d26e23a4382dd630e1e0e08c2dcdd102508efbf268c450"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MailModule-aaf5bc97a192c6ec9092c4564cf15c7bfa8fd9584500103c78ef60625fc3536c3f660b22bcb3275a87c446e2a91c8342a38e6c3fff66783e5acf5f450e87e311"' : 'data-bs-target="#xs-controllers-links-module-MailModule-aaf5bc97a192c6ec9092c4564cf15c7bfa8fd9584500103c78ef60625fc3536c3f660b22bcb3275a87c446e2a91c8342a38e6c3fff66783e5acf5f450e87e311"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailModule-aaf5bc97a192c6ec9092c4564cf15c7bfa8fd9584500103c78ef60625fc3536c3f660b22bcb3275a87c446e2a91c8342a38e6c3fff66783e5acf5f450e87e311"' :
                                            'id="xs-controllers-links-module-MailModule-aaf5bc97a192c6ec9092c4564cf15c7bfa8fd9584500103c78ef60625fc3536c3f660b22bcb3275a87c446e2a91c8342a38e6c3fff66783e5acf5f450e87e311"' }>
                                            <li class="link">
                                                <a href="controllers/MailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-aaf5bc97a192c6ec9092c4564cf15c7bfa8fd9584500103c78ef60625fc3536c3f660b22bcb3275a87c446e2a91c8342a38e6c3fff66783e5acf5f450e87e311"' : 'data-bs-target="#xs-injectables-links-module-MailModule-aaf5bc97a192c6ec9092c4564cf15c7bfa8fd9584500103c78ef60625fc3536c3f660b22bcb3275a87c446e2a91c8342a38e6c3fff66783e5acf5f450e87e311"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-aaf5bc97a192c6ec9092c4564cf15c7bfa8fd9584500103c78ef60625fc3536c3f660b22bcb3275a87c446e2a91c8342a38e6c3fff66783e5acf5f450e87e311"' :
                                        'id="xs-injectables-links-module-MailModule-aaf5bc97a192c6ec9092c4564cf15c7bfa8fd9584500103c78ef60625fc3536c3f660b22bcb3275a87c446e2a91c8342a38e6c3fff66783e5acf5f450e87e311"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-37156ce13c893d6e166f40d5ca17b30c30784c6dec62aa57b26a48234c4bdaa544f4f32b2d08a09401f97ef0dc9282a2577a901f7e568ad0ac5c15ab24bcdd1d"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-37156ce13c893d6e166f40d5ca17b30c30784c6dec62aa57b26a48234c4bdaa544f4f32b2d08a09401f97ef0dc9282a2577a901f7e568ad0ac5c15ab24bcdd1d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-37156ce13c893d6e166f40d5ca17b30c30784c6dec62aa57b26a48234c4bdaa544f4f32b2d08a09401f97ef0dc9282a2577a901f7e568ad0ac5c15ab24bcdd1d"' :
                                            'id="xs-controllers-links-module-PermissionsModule-37156ce13c893d6e166f40d5ca17b30c30784c6dec62aa57b26a48234c4bdaa544f4f32b2d08a09401f97ef0dc9282a2577a901f7e568ad0ac5c15ab24bcdd1d"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-37156ce13c893d6e166f40d5ca17b30c30784c6dec62aa57b26a48234c4bdaa544f4f32b2d08a09401f97ef0dc9282a2577a901f7e568ad0ac5c15ab24bcdd1d"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-37156ce13c893d6e166f40d5ca17b30c30784c6dec62aa57b26a48234c4bdaa544f4f32b2d08a09401f97ef0dc9282a2577a901f7e568ad0ac5c15ab24bcdd1d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-37156ce13c893d6e166f40d5ca17b30c30784c6dec62aa57b26a48234c4bdaa544f4f32b2d08a09401f97ef0dc9282a2577a901f7e568ad0ac5c15ab24bcdd1d"' :
                                        'id="xs-injectables-links-module-PermissionsModule-37156ce13c893d6e166f40d5ca17b30c30784c6dec62aa57b26a48234c4bdaa544f4f32b2d08a09401f97ef0dc9282a2577a901f7e568ad0ac5c15ab24bcdd1d"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ResumesModule-af8b65ff3c934f81d768e527af1f78de758693248e484736f2074f5b36c06a094dd6eebe1a8394f71380f871b8fd4332826a69273d5f012e207b52d02b2cc661"' : 'data-bs-target="#xs-controllers-links-module-ResumesModule-af8b65ff3c934f81d768e527af1f78de758693248e484736f2074f5b36c06a094dd6eebe1a8394f71380f871b8fd4332826a69273d5f012e207b52d02b2cc661"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ResumesModule-af8b65ff3c934f81d768e527af1f78de758693248e484736f2074f5b36c06a094dd6eebe1a8394f71380f871b8fd4332826a69273d5f012e207b52d02b2cc661"' :
                                            'id="xs-controllers-links-module-ResumesModule-af8b65ff3c934f81d768e527af1f78de758693248e484736f2074f5b36c06a094dd6eebe1a8394f71380f871b8fd4332826a69273d5f012e207b52d02b2cc661"' }>
                                            <li class="link">
                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResumesModule-af8b65ff3c934f81d768e527af1f78de758693248e484736f2074f5b36c06a094dd6eebe1a8394f71380f871b8fd4332826a69273d5f012e207b52d02b2cc661"' : 'data-bs-target="#xs-injectables-links-module-ResumesModule-af8b65ff3c934f81d768e527af1f78de758693248e484736f2074f5b36c06a094dd6eebe1a8394f71380f871b8fd4332826a69273d5f012e207b52d02b2cc661"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResumesModule-af8b65ff3c934f81d768e527af1f78de758693248e484736f2074f5b36c06a094dd6eebe1a8394f71380f871b8fd4332826a69273d5f012e207b52d02b2cc661"' :
                                        'id="xs-injectables-links-module-ResumesModule-af8b65ff3c934f81d768e527af1f78de758693248e484736f2074f5b36c06a094dd6eebe1a8394f71380f871b8fd4332826a69273d5f012e207b52d02b2cc661"' }>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-d7ea24d16548410a94ce39ce49333371331ac495ec99ff8388e921d84ee56e366da25a61b4e4cf622b62e96e8a1b5847197dc6f5ae94d7642be54396b9952ffc"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-d7ea24d16548410a94ce39ce49333371331ac495ec99ff8388e921d84ee56e366da25a61b4e4cf622b62e96e8a1b5847197dc6f5ae94d7642be54396b9952ffc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-d7ea24d16548410a94ce39ce49333371331ac495ec99ff8388e921d84ee56e366da25a61b4e4cf622b62e96e8a1b5847197dc6f5ae94d7642be54396b9952ffc"' :
                                            'id="xs-controllers-links-module-RolesModule-d7ea24d16548410a94ce39ce49333371331ac495ec99ff8388e921d84ee56e366da25a61b4e4cf622b62e96e8a1b5847197dc6f5ae94d7642be54396b9952ffc"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-d7ea24d16548410a94ce39ce49333371331ac495ec99ff8388e921d84ee56e366da25a61b4e4cf622b62e96e8a1b5847197dc6f5ae94d7642be54396b9952ffc"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-d7ea24d16548410a94ce39ce49333371331ac495ec99ff8388e921d84ee56e366da25a61b4e4cf622b62e96e8a1b5847197dc6f5ae94d7642be54396b9952ffc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-d7ea24d16548410a94ce39ce49333371331ac495ec99ff8388e921d84ee56e366da25a61b4e4cf622b62e96e8a1b5847197dc6f5ae94d7642be54396b9952ffc"' :
                                        'id="xs-injectables-links-module-RolesModule-d7ea24d16548410a94ce39ce49333371331ac495ec99ff8388e921d84ee56e366da25a61b4e4cf622b62e96e8a1b5847197dc6f5ae94d7642be54396b9952ffc"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubscribersModule-049ad5c3452e99ada2b70efaf2f77a17d6a5d240a8943eaffabd18b9adc7343cb7625c884b6a94f5c63d797b55714657ed86bf06cedf4c16c85d9f2053ca25df"' : 'data-bs-target="#xs-controllers-links-module-SubscribersModule-049ad5c3452e99ada2b70efaf2f77a17d6a5d240a8943eaffabd18b9adc7343cb7625c884b6a94f5c63d797b55714657ed86bf06cedf4c16c85d9f2053ca25df"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscribersModule-049ad5c3452e99ada2b70efaf2f77a17d6a5d240a8943eaffabd18b9adc7343cb7625c884b6a94f5c63d797b55714657ed86bf06cedf4c16c85d9f2053ca25df"' :
                                            'id="xs-controllers-links-module-SubscribersModule-049ad5c3452e99ada2b70efaf2f77a17d6a5d240a8943eaffabd18b9adc7343cb7625c884b6a94f5c63d797b55714657ed86bf06cedf4c16c85d9f2053ca25df"' }>
                                            <li class="link">
                                                <a href="controllers/SubscribersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubscribersModule-049ad5c3452e99ada2b70efaf2f77a17d6a5d240a8943eaffabd18b9adc7343cb7625c884b6a94f5c63d797b55714657ed86bf06cedf4c16c85d9f2053ca25df"' : 'data-bs-target="#xs-injectables-links-module-SubscribersModule-049ad5c3452e99ada2b70efaf2f77a17d6a5d240a8943eaffabd18b9adc7343cb7625c884b6a94f5c63d797b55714657ed86bf06cedf4c16c85d9f2053ca25df"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscribersModule-049ad5c3452e99ada2b70efaf2f77a17d6a5d240a8943eaffabd18b9adc7343cb7625c884b6a94f5c63d797b55714657ed86bf06cedf4c16c85d9f2053ca25df"' :
                                        'id="xs-injectables-links-module-SubscribersModule-049ad5c3452e99ada2b70efaf2f77a17d6a5d240a8943eaffabd18b9adc7343cb7625c884b6a94f5c63d797b55714657ed86bf06cedf4c16c85d9f2053ca25df"' }>
                                        <li class="link">
                                            <a href="injectables/SubscribersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"' :
                                            'id="xs-controllers-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"' :
                                        'id="xs-injectables-links-module-UsersModule-70b1ba97ff2d9d2a8ee1c9bb33dc9859ce0c6a7424ffc74d1b79951ae59f09d8b20c5cdec9561f4544c588e3ccc4da7ab1a2fe9de71c06db6f3ecf2cefe91c6c"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompaniesController.html" data-type="entity-link" >CompaniesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DatabasesController.html" data-type="entity-link" >DatabasesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/JobsController.html" data-type="entity-link" >JobsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailController.html" data-type="entity-link" >MailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubscribersController.html" data-type="entity-link" >SubscribersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-1.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-2.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateResumeDto.html" data-type="entity-link" >CreateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriberDto.html" data-type="entity-link" >CreateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserCvDto.html" data-type="entity-link" >CreateUserCvDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/History.html" data-type="entity-link" >History</a>
                            </li>
                            <li class="link">
                                <a href="classes/Job.html" data-type="entity-link" >Job</a>
                            </li>
                            <li class="link">
                                <a href="classes/MulterExceptionFilter.html" data-type="entity-link" >MulterExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subscriber.html" data-type="entity-link" >Subscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatedBy.html" data-type="entity-link" >UpdatedBy</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateResumeDto.html" data-type="entity-link" >UpdateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubscriberDto.html" data-type="entity-link" >UpdateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompaniesService.html" data-type="entity-link" >CompaniesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscribersService.html" data-type="entity-link" >SubscribersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});