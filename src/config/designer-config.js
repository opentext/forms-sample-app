export const DesignerConfigNames = {
  simpleOnlyModel: 'simpleOnlyModel',
  simpleNoModel: 'simpleNoModel',
  earlyAccess: 'earlyAccess',
  default: 'default',
};

export const getDesignerConfig = (configName) => {
  switch (configName) {
    case DesignerConfigNames.simpleOnlyModel:
      return {
        designer: {
          mainWindow: {
            controlPalette: {
              startingWidth: '260px',
              controls: {
                accordion: {
                  shown: false,
                  supported: false,
                },
                button: {
                  configName: 'button',
                  shown: true,
                  supported: true,
                },
                'check-box': {
                  shown: false,
                  supported: false,
                },
                'combo-box': {
                  shown: false,
                  supported: false,
                },
                'control-container': {
                  configName: 'container',
                  shown: true,
                  supported: true
                },
                datetime: {
                  date: {
                    configName: 'inputWithTextFieldNoTypeSelection',
                    shown: false,
                    supported: true,
                  },
                  dateTime: {
                    configName: 'inputWithTextFieldNoTypeSelection',
                    shown: false,
                    supported: true,
                  },
                },
                iframe: {
                  shown: false,
                  supported: false,
                },
                label: {
                  configName: 'label',
                  shown: true,
                  supported: true,
                },
                link: {
                  configName: 'link',
                  shown: true,
                  supported: true
                },
                'multi-select': {
                  shown: false,
                  supported: false,
                },
                'radio-group': {
                  shown: false,
                  supported: false,
                },
                'richtext-editor': {
                  shown: false,
                  supported: false,
                },
                section: {
                  configName: 'section',
                  shown: true,
                  supported: true,
                },
                'select-box': {
                  configName: 'selectBox',
                  shown: false,
                  supported: true,
                },
                separator: {
                  configName: 'default',
                  shown: true,
                  supported: true,
                },
                'simple-list': {
                  shown: false,
                  supported: false,
                },
                table: {
                  shown: false,
                  supported: false,
                },
                tabs: {
                  configName: 'multiplePanelContainer',
                  shown: true,
                  supported: true,
                },
                'text-area': {
                  configName: 'inputWithTextField',
                  shown: false,
                  supported: true,
                },
                'text-box': {
                  number: {
                    configName: 'inputWithTextFieldNumber',
                    shown: false,
                    supported: true,
                  },
                  integer: {
                    configName: 'inputWithTextFieldInteger',
                    shown: false,
                    supported: true,
                  },
                  string: {
                    configName: 'inputWithTextField',
                    shown: false,
                    supported: true,
                  },
                },
                'toggle-switch': {
                  configName: 'inputWithNoTextField',
                  shown: false,
                  supported: true,
                },
                'user-control': {
                  configName: 'user',
                  shown: false,
                  supported: true,
                },
              },
              sections: {
                models: {
                  collapsible: false,
                  facets: {},
                  maxHeight: 70,
                  search: false,
                  type: 'list',
                  title: {
                    de: {
                      text: 'Modellattribute',
                    },
                    en: {
                      text: 'Model attributes',
                    },
                    es: {
                      text: 'Atributos del modelo',
                    },
                    fr: {
                      text: 'Attributs du modèle',
                    },
                    it: {
                      text: 'Attributi del modello',
                    },
                    ja: {
                      text: 'モデルの属性',
                    },
                    nl: {
                      text: 'Modelattributen',
                    },
                    pl: {
                      text: 'Atrybuty modelu',
                    },
                    pt: {
                      text: 'Atributos do modelo',
                    },
                  },
                },
                components: {
                  collapsible: false,
                  facets: {},
                  maxHeight: 30,
                  type: 'list',
                  title: {
                    de: {
                      text: 'Komponenten',
                    },
                    en: {
                      text: 'Components',
                    },
                    es: {
                      text: 'Componentes',
                    },
                    fr: {
                      text: 'Composants',
                    },
                    it: {
                      text: 'Componenti',
                    },
                    ja: {
                      text: 'コンポーネント',
                    },
                    nl: {
                      text: 'Componenten',
                    },
                    pl: {
                      text: 'Komponenty',
                    },
                    pt: {
                      text: 'Componentes',
                    },
                  },
                },
              },
            },
            toolbar: {
              preview: {
                shown: false,
              },
              delete: {
                hide: false,
              },
              redo: {
                hide: false,
              },
              undo: {
                hide: false,
              },
            },
            properties: {
              startingWidth: '260px',
              controlConfigs: {
                button: {
                  type: 'form-container',
                  id: 'c56b8806b33d4db799c4de22fe442089',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows:
                          'auto auto auto auto auto minmax(52px, auto) minmax(52px, auto) minmax(52px, auto) auto auto'
                      },
                      id: 'ee3dd9b6fcf44571a2932853e996bde2',
                      border: 'border: 0 solid #ddd;',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'cf7e0f635aa248e2b4d91ebda642e0be',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'bca8ab70a83441c9bc8dd6e50c58cd5b'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'c01adbde9c7240fa8e3160f8ff9d5616'
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'afa6e32e824e4899b966012af16b7514'
                        },
                        {
                          label: {
                            text: 'this.localeData.buttonPosition'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 3,
                          propertyPath: 'runtime.flexPosition',
                          type: 'omni-direction-pad',
                          id: 'c034f3dc7c6d40218af69234d71bffa6'
                        },
                        {
                          label: {
                            text: 'this.localeData.sizeToCell'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.sizeToCell',
                          type: 'toggle-switch',
                          id: 'b2bb554595114f83bac1350c80d581b9'
                        },
                        {
                          label: {
                            text: 'this.localeData.name'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.name',
                          type: 'text-box',
                          id: 'a48a6551b6aa4d22b35a0b4751b9267b'
                        },
                      ],
                    },
                  ],
                },
                container: {
                  type: 'form-container',
                  id: 'b238f79f3b694f099b0189af8cb94d65',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto auto auto auto'
                      },
                      id: 'e49204811ef3406ea3439f52f170385b',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'a81c37ff664a4cec9c607a560400c697',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.headerTitle'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.title.text',
                          type: 'text-box',
                          id: 'a17b402e8c8f4c1ca864f1003d44e518'
                        },
                        {
                          label: {
                            text: 'this.localeData.autoHeight',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.autoHeight',
                          type: 'toggle-switch',
                          id: 'a2d5115bc71b428e8b651374de8f0e6f'
                        },
                        {
                          label: {
                            text: 'this.localeData.maxRowsToDisplay'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          placeholder: '',
                          propertyPath: 'runtime.section.rowsToDisplay',
                          type: 'text-box',
                          id: 'c778191d9bfb43c8b0587012329f2d9f',
                          dataType: 'integer',
                          minValue: 1,
                          maxValue: 1000
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'eb1b68bade1a4e328c68c18f0f71916c'
                        },
                        {
                          label: {
                            text: 'this.localeData.inheritParentColumnCount',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'designer.grid.inheritParentColumnCount',
                          type: 'toggle-switch',
                          id: 'b99e96143db4400eb44e40befc1d05be'
                        },
                        {
                          label: {
                            text: 'this.localeData.numberOfColumns'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          dataType: 'integer',
                          placeholder: '',
                          propertyPath: 'designer.grid.numberOfColumns',
                          type: 'text-box',
                          maxValue: 12,
                          minValue: 1,
                          id: 'e6b928e9eb2840f3ba88a2900f769063'
                        },
                      ],
                    },
                  ],
                },
                label: {
                  type: 'form-container',
                  id: 'c8351faaf4df40a0873502be4800a476',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto',
                      },
                      id: 'f8d7983e113f47d88b7f7cd7c4ca37dd',
                      border: '0',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'c2393676766a45e3a8cfeb5f6c58b8b7',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'd4cdfb13879b4faba89283a1a553e1c5',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelStyle',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.layoutTextStyle',
                          type: 'type-ahead',
                          id: 'aefa1dc0fdbf4e10948461d638923e46',
                        },
                      ],
                    },
                  ],
                },
                link: {
                  type: 'form-container',
                  id: 'fcec49810eed4ffa9de928e3ab04d9b9',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 2,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto auto auto'
                      },
                      id: 'ada3017c0d2e4e729d38494cb2a584bf',
                      border: '0',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'ad3b65ac52b94e1c84383bf3f12d970c',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.linkLabelText'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 2,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'e044c253c1644497a2221f7ad9a202bb'
                        },
                        {
                          label: {
                            text: 'this.localeData.useFreeText',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 2,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.urlControl.useFreeText',
                          type: 'toggle-switch',
                          id: 'a96ad8333937406f8e2a011ab4983f5d'
                        },
                        {
                          label: {
                            text: 'this.localeData.uri'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 2,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.urlControl.freeTextUrl',
                          type: 'text-box',
                          id: 'dcd6568e57e74cd2964d261214eaea73'
                        },
                        {
                          label: {
                            text: 'this.localeData.uri'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 2,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.urlControl.pickerUrl',
                          type: 'type-ahead',
                          id: 'f69063cb9c5a493da7196c92aacdcfaf'
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltipLink'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 2,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'abf65ade50d2421194025a88368d48c4'
                        },
                      ],
                    },
                  ],
                },
                inputWithNoTextField: {
                  type: 'form-container',
                  id: 'b79358f5ac714ae89b943e3c29cbc06c',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto',
                      },
                      id: 'fd279d3592e740b7980dc5f97fa1fd3e',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'c2393676766a45e3a8cfeb5f6c58b8b7',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'c9eeb6125a3c47bc81201e7cf09fcee9',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'c13f16e1dcad48258f42d33242fdb11b',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'f183d64c19a44c34afa600612bdf96cb',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'effc4a3623ff43069ec19bd09228c67c',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'a070a121413b4443a3208b3d26ba9e10',
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'ae365a8fb8ee49e3845bad4c9089e572',
                        },
                      ],
                    },
                  ],
                },
                inputWithTextField: {
                  type: 'form-container',
                  id: 'd28b8abad77b478e9de0eadf019d4879',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows:
                          'auto auto auto auto auto auto auto auto',
                      },
                      id: 'bd2d8fc69be24a8b8568ee4fd51ef179',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'c2393676766a45e3a8cfeb5f6c58b8b7',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'bd0c7ef249cc4582b11094c2b43c6b6b',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'ac6aefd8f41949ea8bbd38d0df585f20',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'd57857daef554805a012c5156cdb49de',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'fa67f93b7a55463a8892e765c447f029',
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'd54af392656b4d73b0392ed47f6c0c17',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'b8ca3bc9ea604388aea960743a3e32e5',
                        },
                        {
                          label: {
                            text: 'this.localeData.placeHolderText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.placeholder',
                          type: 'text-box',
                          id: 'e9fb77ee155a4e84b8fdc5e2c8ae1127',
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 9,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'c88d55ef7e0c46cbabd745e4dfa80e2f',
                        },
                      ],
                    },
                  ],
                },
                user: {
                  type: 'form-container',
                  id: 'a244d8021d7647a08f0b4d2393b5b78c',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto auto auto auto auto'
                      },
                      id: 'dfacc36ea3f14b9581fa9db4c4da03a4',
                      border: 'border: 0 solid #ddd',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'cd0e6bab815840929f5dcdffa2299294',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'd0b5f05d62114c57bda3ef7feeb1e0b7'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'bb45fa266547415893d5bc89c50dbde7'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'd6d34ab122754d8e9f6a22aeb7b860f5'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'f2941d6f4ebf4cb48459918d94cb02bd'
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'ecca284d5b0b4f9ba9b93f48e94a55bb'
                        },
                        {
                          label: {
                            text: 'this.localeData.placeHolderText'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.placeholder',
                          type: 'text-box',
                          id: 'fc6206af7c574eb991e3300ed418cfa9'
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'e5954aca5683423583df29de74002ad2'
                        },
                      ],
                    },
                  ],
                },
                section: {
                  type: 'form-container',
                  id: 'f44f856547194f04af351d25d15ca309',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto auto'
                      },
                      id: 'e630ca80f95946b89f6163084b0874ad',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'e67ee5b2901b4ac8911335338f2d2ecc',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.rowsToDisplay'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          placeholder: '',
                          propertyPath: 'runtime.section.rowsToDisplay',
                          type: 'text-box',
                          id: 'f93d07b314e249d4aa298206ffc2b9d1',
                          dataType: 'integer',
                          minValue: 1,
                          maxValue: 1000
                        },
                        {
                          label: {
                            text: 'this.localeData.headerTitle'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.title.text',
                          type: 'text-box',
                          id: 'dfaca914a11d4154b29f872140554feb'
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'd8d0c42f7f164d6d81015525eba2099f'
                        },
                        {
                          label: {
                            text: 'this.localeData.inheritParentColumnCount',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'designer.grid.inheritParentColumnCount',
                          type: 'toggle-switch',
                          id: 'd570a6d439e84f889c37f3625a457e3b'
                        },
                        {
                          label: {
                            text: 'this.localeData.numberOfColumns'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          dataType: 'integer',
                          placeholder: '',
                          propertyPath: 'designer.grid.numberOfColumns',
                          type: 'text-box',
                          maxValue: 12,
                          minValue: 1,
                          id: 'f3cb62ef4ed043de9ece76b5facab76e'
                        },
                      ],
                    },
                  ],
                },
                multiplePanelContainer: {
                  type: 'form-container',
                  id: 'c9142256f9db40599e9215035b7c4da3',
                  border: '1px solid #ddd',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto',
                      },
                      id: 'e2e754901e904fe3ae9ee1772f518f87',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'ad3b65ac52b94e1c84383bf3f12d970c',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.numberOfTabs',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          placeholder: '',
                          propertyPath: 'runtime.tabs',
                          dataType: 'integer',
                          type: 'text-box',
                          minValue: 1,
                          maxValue: 100,
                          id: 'aa50f8c5ca1c4f69a9abfeb16307d50f',
                        },
                        {
                          label: {
                            text: 'Match parent columns',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath:
                            'designer.grid.inheritParentColumnCount',
                          type: 'toggle-switch',
                          id: 'c8fda3bfab5f45659c1997dde26bbc8f',
                        },
                        {
                          label: {
                            text: 'this.localeData.numberOfColumns',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          placeholder: '',
                          dataType: 'integer',
                          propertyPath: 'designer.grid.numberOfColumns',
                          type: 'text-box',
                          maxValue: 12,
                          minValue: 1,
                          id: 'a79525879270435a9d5a423d7433ca4d',
                        },
                      ],
                    },
                  ],
                },
                default: {
                  type: 'form-container',
                  id: 'b47e86c5f13845ebad98873d217b7b68',
                  controls: [],
                },
                selectBox: {
                  type: 'form-container',
                  id: 'e517ed6251054f80a64f43970fe6bf69',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows:
                          'auto auto auto auto auto auto auto auto auto',
                      },
                      id: 'c6af7308cc9741ccbb9f38373919fc25',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'c2393676766a45e3a8cfeb5f6c58b8b7',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'ce3231fc8e98454eb7ecf129208560cf',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'b52356ec2cf44d98ab3710f2d403cb5e',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'bd562700995c4983b81d533ee5f55280',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'e86b691a9c2a4fbf9040a929065c24be',
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'd42bee44b84a46858c71b5f6d8471878',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'df8322da14e041fb93012262e514f3cf',
                        },
                        {
                          label: {
                            text: 'this.localeData.placeHolderText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.placeholder',
                          type: 'text-box',
                          id: 'e456eaa83f3847f197034b914b9baee2',
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 9,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'dbb18bcca2644f5bbfe160c749dbf954',
                        },
                        {
                          label: {
                            text: 'this.localeData.disableTypeAhead',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 10,
                          gridRowEnd: 1,
                          propertyPath: 'designer.disableTypeAhead',
                          type: 'toggle-switch',
                          id: 'e365bbc98d614835bfb03fc3c43854c7',
                        },
                      ],
                    },
                  ],
                },
                inputWithTextFieldNumber: {
                  type: 'form-container',
                  id: 'e6403067ca8e4f6f8ea1cec097166bca',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows:
                          'auto auto auto auto auto auto auto auto auto',
                      },
                      id: 'a3bedaacc3ce414b84c46776f1d75667',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'cf7e0f635aa248e2b4d91ebda642e0be',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'cbf2b2f9d87e43248d198b6a89571ab6',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'f6a996e3a8cf47a588078d3975708104',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'ef7d54a73ff842ba85bf735f9959d781',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'd72d4d16f4fc430586b71a738ade96cd',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'ff3266d2f63f49329b3dbebbe895476c',
                        },
                        {
                          label: {
                            text: 'this.localeData.placeHolderText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.placeholder',
                          type: 'text-box',
                          id: 'efa3c697d3d94a72868ad3d2ddb7a0ba',
                        },
                        {
                          label: {
                            text: 'this.localeData.inputAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.input.alignment',
                          type: 'type-ahead',
                          id: 'c473f8c87dff4c44846230c500a7f786',
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 9,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'ddd3d40d610e490da824bafd6aad69d7',
                        },
                      ],
                    },
                  ],
                },
                inputWithTextFieldInteger: {
                  type: 'form-container',
                  id: 'e6403067ca8e4f6f8ea1cec097166bca',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows:
                          'auto auto auto auto auto auto auto auto auto',
                      },
                      id: 'a3bedaacc3ce414b84c46776f1d75667',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'cf7e0f635aa248e2b4d91ebda642e0be',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'cbf2b2f9d87e43248d198b6a89571ab6',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'f6a996e3a8cf47a588078d3975708104',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'ef7d54a73ff842ba85bf735f9959d781',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'd72d4d16f4fc430586b71a738ade96cd',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'ff3266d2f63f49329b3dbebbe895476c',
                        },
                        {
                          label: {
                            text: 'this.localeData.placeHolderText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.placeholder',
                          type: 'text-box',
                          id: 'efa3c697d3d94a72868ad3d2ddb7a0ba',
                        },
                        {
                          label: {
                            text: 'this.localeData.inputAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.input.alignment',
                          type: 'type-ahead',
                          id: 'c473f8c87dff4c44846230c500a7f786',
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 9,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'ddd3d40d610e490da824bafd6aad69d7',
                        },
                      ],
                    },
                  ],
                },
                inputWithTextFieldNoTypeSelection: {
                  type: 'form-container',
                  id: 'ee3acf79eb4540cfb8e74d39e057b152',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto',
                      },
                      id: 'e3a84d946b6c4e728ea29cf8e9b81f8b',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'c2393676766a45e3a8cfeb5f6c58b8b7',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'ab1332d4cf47484ea7ca9bacef6912c1',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'be7401a05a384c44b7318288feb0669e',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'cbf1b0a86ec440f8a38458b894c7b8c4',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'a0a6634b8eb54a0183478715dc6b7d61',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'd7cfc4abd9694d0584dfae9f8e54a1f6',
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'c5cb2e6da34744f9b6c60eef1e3cf5d0',
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
      };
    case DesignerConfigNames.simpleNoModel:
      return {
        designer: {
          mainWindow: {
            controlPalette: {
              startingWidth: '260px',
              controls: {
                accordion: {
                  shown: false,
                  supported: false,
                },
                button: {
                  configName: 'button',
                  shown: true,
                  supported: true,
                },
                'check-box': {
                  shown: false,
                  supported: false,
                },
                'combo-box': {
                  shown: false,
                  supported: false,
                },
                'control-container': {
                  configName: 'container',
                  shown: true,
                  supported: true
                },
                datetime: {
                  date: {
                    configName: 'inputWithTextFieldNoTypeSelection',
                    shown: true,
                    supported: true,
                  },
                  dateTime: {
                    configName: 'inputWithTextFieldNoTypeSelection',
                    shown: true,
                    supported: true,
                  },
                },
                iframe: {
                  shown: false,
                  supported: false,
                },
                label: {
                  configName: 'label',
                  shown: true,
                  supported: true,
                },
                link: {
                  configName: 'link',
                  shown: true,
                  supported: true
                },
                'multi-select': {
                  shown: false,
                  supported: false,
                },
                'radio-group': {
                  shown: false,
                  supported: false,
                },
                'richtext-editor': {
                  shown: false,
                  supported: false,
                },
                section: {
                  configName: 'section',
                  shown: true,
                  supported: true,
                },
                'select-box': {
                  configName: 'selectBox',
                  shown: true,
                  supported: true,
                },
                separator: {
                  configName: 'default',
                  shown: true,
                  supported: true,
                },
                'simple-list': {
                  shown: false,
                  supported: false,
                },
                table: {
                  shown: false,
                  supported: false,
                },
                tabs: {
                  configName: 'multiplePanelContainer',
                  shown: true,
                  supported: true,
                },
                'text-area': {
                  configName: 'inputWithTextField',
                  shown: true,
                  supported: true,
                },
                'text-box': {
                  number: {
                    configName: 'inputWithTextFieldNumber',
                    shown: true,
                    supported: true,
                  },
                  integer: {
                    configName: 'inputWithTextFieldInteger',
                    shown: true,
                    supported: true,
                  },
                  string: {
                    configName: 'inputWithTextField',
                    shown: true,
                    supported: true,
                  },
                },
                'toggle-switch': {
                  configName: 'inputWithNoTextField',
                  shown: true,
                  supported: true,
                },
                'user-control': {
                  configName: 'user',
                  shown: true,
                  supported: true,
                },
              },
              sections: {
                models: {
                  shown: false,
                },
                components: {
                  collapsible: false,
                  facets: {},
                  maxHeight: 100,
                  type: 'list',
                  title: {
                    de: {
                      text: 'Komponenten',
                    },
                    en: {
                      text: 'Components',
                    },
                    es: {
                      text: 'Componentes',
                    },
                    fr: {
                      text: 'Composants',
                    },
                    it: {
                      text: 'Componenti',
                    },
                    ja: {
                      text: 'コンポーネント',
                    },
                    nl: {
                      text: 'Componenten',
                    },
                    pl: {
                      text: 'Komponenty',
                    },
                    pt: {
                      text: 'Componentes',
                    },
                  },
                },
              },
            },
            toolbar: {
              preview: {
                shown: false,
              },
              delete: {
                hide: false,
              },
              redo: {
                hide: false,
              },
              undo: {
                hide: false,
              },
            },
            properties: {
              startingWidth: '260px',
              controlConfigs: {
                button: {
                  type: 'form-container',
                  id: 'c56b8806b33d4db799c4de22fe442089',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows:
                          'auto auto auto auto auto minmax(52px, auto) minmax(52px, auto) minmax(52px, auto) auto auto'
                      },
                      id: 'ee3dd9b6fcf44571a2932853e996bde2',
                      border: 'border: 0 solid #ddd;',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'cf7e0f635aa248e2b4d91ebda642e0be',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'bca8ab70a83441c9bc8dd6e50c58cd5b'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'c01adbde9c7240fa8e3160f8ff9d5616'
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'afa6e32e824e4899b966012af16b7514'
                        },
                        {
                          label: {
                            text: 'this.localeData.buttonPosition'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 3,
                          propertyPath: 'runtime.flexPosition',
                          type: 'omni-direction-pad',
                          id: 'c034f3dc7c6d40218af69234d71bffa6'
                        },
                        {
                          label: {
                            text: 'this.localeData.sizeToCell'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.sizeToCell',
                          type: 'toggle-switch',
                          id: 'b2bb554595114f83bac1350c80d581b9'
                        },
                        {
                          label: {
                            text: 'this.localeData.name'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.name',
                          type: 'text-box',
                          id: 'a48a6551b6aa4d22b35a0b4751b9267b'
                        },
                      ],
                    },
                  ],
                },
                container: {
                  type: 'form-container',
                  id: 'b238f79f3b694f099b0189af8cb94d65',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto auto auto auto'
                      },
                      id: 'e49204811ef3406ea3439f52f170385b',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'a81c37ff664a4cec9c607a560400c697',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.headerTitle'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.title.text',
                          type: 'text-box',
                          id: 'a17b402e8c8f4c1ca864f1003d44e518'
                        },
                        {
                          label: {
                            text: 'this.localeData.autoHeight',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.autoHeight',
                          type: 'toggle-switch',
                          id: 'a2d5115bc71b428e8b651374de8f0e6f'
                        },
                        {
                          label: {
                            text: 'this.localeData.maxRowsToDisplay'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          placeholder: '',
                          propertyPath: 'runtime.section.rowsToDisplay',
                          type: 'text-box',
                          id: 'c778191d9bfb43c8b0587012329f2d9f',
                          dataType: 'integer',
                          minValue: 1,
                          maxValue: 1000
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'eb1b68bade1a4e328c68c18f0f71916c'
                        },
                        {
                          label: {
                            text: 'this.localeData.inheritParentColumnCount',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'designer.grid.inheritParentColumnCount',
                          type: 'toggle-switch',
                          id: 'b99e96143db4400eb44e40befc1d05be'
                        },
                        {
                          label: {
                            text: 'this.localeData.numberOfColumns'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          dataType: 'integer',
                          placeholder: '',
                          propertyPath: 'designer.grid.numberOfColumns',
                          type: 'text-box',
                          maxValue: 12,
                          minValue: 1,
                          id: 'e6b928e9eb2840f3ba88a2900f769063'
                        },
                      ],
                    },
                  ],
                },
                label: {
                  type: 'form-container',
                  id: 'c8351faaf4df40a0873502be4800a476',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto',
                      },
                      id: 'f8d7983e113f47d88b7f7cd7c4ca37dd',
                      border: '0',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'c2393676766a45e3a8cfeb5f6c58b8b7',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'd4cdfb13879b4faba89283a1a553e1c5',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelStyle',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.layoutTextStyle',
                          type: 'type-ahead',
                          id: 'aefa1dc0fdbf4e10948461d638923e46',
                        },
                      ],
                    },
                  ],
                },
                link: {
                  type: 'form-container',
                  id: 'fcec49810eed4ffa9de928e3ab04d9b9',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 2,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto auto auto'
                      },
                      id: 'ada3017c0d2e4e729d38494cb2a584bf',
                      border: '0',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'ad3b65ac52b94e1c84383bf3f12d970c',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.linkLabelText'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 2,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'e044c253c1644497a2221f7ad9a202bb'
                        },
                        {
                          label: {
                            text: 'this.localeData.useFreeText',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 2,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.urlControl.useFreeText',
                          type: 'toggle-switch',
                          id: 'a96ad8333937406f8e2a011ab4983f5d'
                        },
                        {
                          label: {
                            text: 'this.localeData.uri'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 2,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.urlControl.freeTextUrl',
                          type: 'text-box',
                          id: 'dcd6568e57e74cd2964d261214eaea73'
                        },
                        {
                          label: {
                            text: 'this.localeData.uri'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 2,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.urlControl.pickerUrl',
                          type: 'type-ahead',
                          id: 'f69063cb9c5a493da7196c92aacdcfaf'
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltipLink'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 2,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'abf65ade50d2421194025a88368d48c4'
                        },
                      ],
                    },
                  ],
                },
                inputWithNoTextField: {
                  type: 'form-container',
                  id: 'b79358f5ac714ae89b943e3c29cbc06c',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto',
                      },
                      id: 'fd279d3592e740b7980dc5f97fa1fd3e',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'c2393676766a45e3a8cfeb5f6c58b8b7',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'c9eeb6125a3c47bc81201e7cf09fcee9',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'c13f16e1dcad48258f42d33242fdb11b',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'f183d64c19a44c34afa600612bdf96cb',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'effc4a3623ff43069ec19bd09228c67c',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'a070a121413b4443a3208b3d26ba9e10',
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'ae365a8fb8ee49e3845bad4c9089e572',
                        },
                      ],
                    },
                  ],
                },
                inputWithTextField: {
                  type: 'form-container',
                  id: 'd28b8abad77b478e9de0eadf019d4879',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows:
                          'auto auto auto auto auto auto auto auto',
                      },
                      id: 'bd2d8fc69be24a8b8568ee4fd51ef179',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'c2393676766a45e3a8cfeb5f6c58b8b7',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'bd0c7ef249cc4582b11094c2b43c6b6b',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'ac6aefd8f41949ea8bbd38d0df585f20',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'd57857daef554805a012c5156cdb49de',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'fa67f93b7a55463a8892e765c447f029',
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'd54af392656b4d73b0392ed47f6c0c17',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'b8ca3bc9ea604388aea960743a3e32e5',
                        },
                        {
                          label: {
                            text: 'this.localeData.placeHolderText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.placeholder',
                          type: 'text-box',
                          id: 'e9fb77ee155a4e84b8fdc5e2c8ae1127',
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 9,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'c88d55ef7e0c46cbabd745e4dfa80e2f',
                        },
                      ],
                    },
                  ],
                },
                user: {
                  type: 'form-container',
                  id: 'a244d8021d7647a08f0b4d2393b5b78c',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto auto auto auto auto'
                      },
                      id: 'dfacc36ea3f14b9581fa9db4c4da03a4',
                      border: 'border: 0 solid #ddd',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'cd0e6bab815840929f5dcdffa2299294',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'd0b5f05d62114c57bda3ef7feeb1e0b7'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'bb45fa266547415893d5bc89c50dbde7'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'd6d34ab122754d8e9f6a22aeb7b860f5'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'f2941d6f4ebf4cb48459918d94cb02bd'
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'ecca284d5b0b4f9ba9b93f48e94a55bb'
                        },
                        {
                          label: {
                            text: 'this.localeData.placeHolderText'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.placeholder',
                          type: 'text-box',
                          id: 'fc6206af7c574eb991e3300ed418cfa9'
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'e5954aca5683423583df29de74002ad2'
                        },
                      ],
                    },
                  ],
                },
                section: {
                  type: 'form-container',
                  id: 'f44f856547194f04af351d25d15ca309',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto auto'
                      },
                      id: 'e630ca80f95946b89f6163084b0874ad',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'e67ee5b2901b4ac8911335338f2d2ecc',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.rowsToDisplay'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          placeholder: '',
                          propertyPath: 'runtime.section.rowsToDisplay',
                          type: 'text-box',
                          id: 'f93d07b314e249d4aa298206ffc2b9d1',
                          dataType: 'integer',
                          minValue: 1,
                          maxValue: 1000
                        },
                        {
                          label: {
                            text: 'this.localeData.headerTitle'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.title.text',
                          type: 'text-box',
                          id: 'dfaca914a11d4154b29f872140554feb'
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'd8d0c42f7f164d6d81015525eba2099f'
                        },
                        {
                          label: {
                            text: 'this.localeData.inheritParentColumnCount',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'designer.grid.inheritParentColumnCount',
                          type: 'toggle-switch',
                          id: 'd570a6d439e84f889c37f3625a457e3b'
                        },
                        {
                          label: {
                            text: 'this.localeData.numberOfColumns'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          dataType: 'integer',
                          placeholder: '',
                          propertyPath: 'designer.grid.numberOfColumns',
                          type: 'text-box',
                          maxValue: 12,
                          minValue: 1,
                          id: 'f3cb62ef4ed043de9ece76b5facab76e'
                        },
                      ],
                    },
                  ],
                },
                multiplePanelContainer: {
                  type: 'form-container',
                  id: 'c9142256f9db40599e9215035b7c4da3',
                  border: '1px solid #ddd',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto',
                      },
                      id: 'e2e754901e904fe3ae9ee1772f518f87',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'ad3b65ac52b94e1c84383bf3f12d970c',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.numberOfTabs',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          placeholder: '',
                          propertyPath: 'runtime.tabs',
                          dataType: 'integer',
                          type: 'text-box',
                          minValue: 1,
                          maxValue: 100,
                          id: 'aa50f8c5ca1c4f69a9abfeb16307d50f',
                        },
                        {
                          label: {
                            text: 'Match parent columns',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath:
                            'designer.grid.inheritParentColumnCount',
                          type: 'toggle-switch',
                          id: 'c8fda3bfab5f45659c1997dde26bbc8f',
                        },
                        {
                          label: {
                            text: 'this.localeData.numberOfColumns',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          placeholder: '',
                          dataType: 'integer',
                          propertyPath: 'designer.grid.numberOfColumns',
                          type: 'text-box',
                          maxValue: 12,
                          minValue: 1,
                          id: 'a79525879270435a9d5a423d7433ca4d',
                        },
                      ],
                    },
                  ],
                },
                default: {
                  type: 'form-container',
                  id: 'b47e86c5f13845ebad98873d217b7b68',
                  controls: [],
                },
                selectBox: {
                  type: 'form-container',
                  id: 'e517ed6251054f80a64f43970fe6bf69',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows:
                          'auto auto auto auto auto auto auto auto auto',
                      },
                      id: 'c6af7308cc9741ccbb9f38373919fc25',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'c2393676766a45e3a8cfeb5f6c58b8b7',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'ce3231fc8e98454eb7ecf129208560cf',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'b52356ec2cf44d98ab3710f2d403cb5e',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'bd562700995c4983b81d533ee5f55280',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'e86b691a9c2a4fbf9040a929065c24be',
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'd42bee44b84a46858c71b5f6d8471878',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'df8322da14e041fb93012262e514f3cf',
                        },
                        {
                          label: {
                            text: 'this.localeData.placeHolderText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.placeholder',
                          type: 'text-box',
                          id: 'e456eaa83f3847f197034b914b9baee2',
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 9,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'dbb18bcca2644f5bbfe160c749dbf954',
                        },
                        {
                          label: {
                            text: 'this.localeData.disableTypeAhead',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 10,
                          gridRowEnd: 1,
                          propertyPath: 'designer.disableTypeAhead',
                          type: 'toggle-switch',
                          id: 'e365bbc98d614835bfb03fc3c43854c7',
                        },
                      ],
                    },
                  ],
                },
                inputWithTextFieldNumber: {
                  type: 'form-container',
                  id: 'e6403067ca8e4f6f8ea1cec097166bca',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows:
                          'auto auto auto auto auto auto auto auto auto',
                      },
                      id: 'a3bedaacc3ce414b84c46776f1d75667',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'cf7e0f635aa248e2b4d91ebda642e0be',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'cbf2b2f9d87e43248d198b6a89571ab6',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'f6a996e3a8cf47a588078d3975708104',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'ef7d54a73ff842ba85bf735f9959d781',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'd72d4d16f4fc430586b71a738ade96cd',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'ff3266d2f63f49329b3dbebbe895476c',
                        },
                        {
                          label: {
                            text: 'this.localeData.placeHolderText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.placeholder',
                          type: 'text-box',
                          id: 'efa3c697d3d94a72868ad3d2ddb7a0ba',
                        },
                        {
                          label: {
                            text: 'this.localeData.inputAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.input.alignment',
                          type: 'type-ahead',
                          id: 'c473f8c87dff4c44846230c500a7f786',
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 9,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'ddd3d40d610e490da824bafd6aad69d7',
                        },
                      ],
                    },
                  ],
                },
                inputWithTextFieldInteger: {
                  type: 'form-container',
                  id: 'e6403067ca8e4f6f8ea1cec097166bca',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows:
                          'auto auto auto auto auto auto auto auto auto',
                      },
                      id: 'a3bedaacc3ce414b84c46776f1d75667',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'cf7e0f635aa248e2b4d91ebda642e0be',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'cbf2b2f9d87e43248d198b6a89571ab6',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'f6a996e3a8cf47a588078d3975708104',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'ef7d54a73ff842ba85bf735f9959d781',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'd72d4d16f4fc430586b71a738ade96cd',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'ff3266d2f63f49329b3dbebbe895476c',
                        },
                        {
                          label: {
                            text: 'this.localeData.placeHolderText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.placeholder',
                          type: 'text-box',
                          id: 'efa3c697d3d94a72868ad3d2ddb7a0ba',
                        },
                        {
                          label: {
                            text: 'this.localeData.inputAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.input.alignment',
                          type: 'type-ahead',
                          id: 'c473f8c87dff4c44846230c500a7f786',
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 9,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'ddd3d40d610e490da824bafd6aad69d7',
                        },
                      ],
                    },
                  ],
                },
                inputWithTextFieldNoTypeSelection: {
                  type: 'form-container',
                  id: 'ee3acf79eb4540cfb8e74d39e057b152',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto',
                      },
                      id: 'e3a84d946b6c4e728ea29cf8e9b81f8b',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'c2393676766a45e3a8cfeb5f6c58b8b7',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'ab1332d4cf47484ea7ca9bacef6912c1',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'be7401a05a384c44b7318288feb0669e',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'cbf1b0a86ec440f8a38458b894c7b8c4',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'a0a6634b8eb54a0183478715dc6b7d61',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'd7cfc4abd9694d0584dfae9f8e54a1f6',
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'c5cb2e6da34744f9b6c60eef1e3cf5d0',
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
      };
    case DesignerConfigNames.earlyAccess:
      return {
        designer: {
          mainWindow: {
            controlPalette: {
              startingWidth: '260px',
              controls: {
                'action-bar': {
                  configName: 'default',
                  shown: true,
                  supported: true,
                },
                'h-flex': {
                  configName: 'default',
                  shown: true,
                  supported: true,
                },
                image: {
                  configName: 'image',
                  shown: true,
                  supported: true,
                },
                'image-button': {
                  configName: 'image-button',
                  shown: true,
                  supported: true,
                },
                upload: {
                  configName: 'inputWithTextFieldNoPlaceHolder',
                  shown: true,
                  supported: true,
                },
                'v-flex': {
                  configName: 'default',
                  shown: true,
                  supported: true,
                },
              },
              sections: {
                models: {
                  facets: {},
                  maxHeight: 70,
                  search: true,
                  type: 'list',
                  title: {
                    de: {
                      text: 'Modellattribute',
                    },
                    en: {
                      text: 'Model attributes',
                    },
                    es: {
                      text: 'Atributos del modelo',
                    },
                    fr: {
                      text: 'Attributs du modèle',
                    },
                    it: {
                      text: 'Attributi del modello',
                    },
                    ja: {
                      text: 'モデルの属性',
                    },
                    nl: {
                      text: 'Modelattributen',
                    },
                    pl: {
                      text: 'Atrybuty modelu',
                    },
                    pt: {
                      text: 'Atributos do modelo',
                    },
                  },
                },
                components: {
                  collapsible: true,
                  maxHeight: 70,
                  search: true,
                  type: 'list',
                  title: {
                    de: {
                      text: 'Komponenten',
                    },
                    en: {
                      text: 'Components',
                    },
                    es: {
                      text: 'Componentes',
                    },
                    fr: {
                      text: 'Composants',
                    },
                    it: {
                      text: 'Componenti',
                    },
                    ja: {
                      text: 'コンポーネント',
                    },
                    nl: {
                      text: 'Componenten',
                    },
                    pl: {
                      text: 'Komponenty',
                    },
                    pt: {
                      text: 'Componentes',
                    },
                  },
                },
                templates: {
                  collapsedByDefault: true,
                  facets: {},
                  maxHeight: 50,
                  shown: true,
                  type: 'list',
                  title: {
                    de: {
                      text: 'Vorlagen',
                    },
                    en: {
                      text: 'Templates',
                    },
                    es: {
                      text: 'Plantillas',
                    },
                    fr: {
                      text: 'Modèles',
                    },
                    it: {
                      text: 'Modelli',
                    },
                    ja: {
                      text: 'テンプレート',
                    },
                    nl: {
                      text: 'Sjablonen',
                    },
                    pl: {
                      text: 'Szablony',
                    },
                    pt: {
                      text: 'Modelos',
                    },
                  },
                },
              },
            },
            toolbar: {
              addTemplate: {
                shown: true,
              },
              delete: {
                hide: false,
              },
              redo: {
                hide: false,
              },
              saveLayoutTemplate: {
                shown: true,
              },
              saveTemplate: {
                shown: true,
              },
              undo: {
                hide: false,
              },
            },
            properties: {
              controlConfigs: {
                image: {
                  type: 'form-container',
                  id: 'a59ce7a21c12459fb8cd874f8670b8c2',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto auto'
                      },
                      id: 'cf4c5c765b604b2e8fbf425ab90ae5eb',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'c840c06573354613a1f3294bc8492740',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'eb92375cd8cc49958d292f19081beee9'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'a8cfdafbb8e7495da033088037f17543'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'aa53464781ac4f6f820f710a33c959ff'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'cf751384cf074c8f88a42b7518b6e6e9'
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'cbd817ebb58a4d129ff6aec31e1281a4'
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'dce9ac1eec8a47d292b47ab8c4b29dee'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelFont'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.font',
                          type: 'font',
                          id: 'cd703be741ea4a4aa62cbe713728dfac'
                        }
                      ],
                    },
                  ],
                },
                'image-button': {
                  type: 'form-container',
                  id: 'f6053c95b8e949dd86c5754ac7ef43b8',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto minmax(52px, auto) minmax(52px, auto) minmax(52px, auto) auto auto'
                      },
                      id: 'd9d2c55a31a8404c82796a07c36745ad',
                      border: 'border: 0 solid #ddd;',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'ccf540029a804e87814855baeca63dff',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'dd4fb01049704398bc17680ded8d06e8'
                        },
                        {
                          label: {
                            text: 'this.localeData.backgroundColor'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.backgroundColor',
                          type: 'color-select',
                          id: 'ec79436fef1d428283e3bb948bcb7ab9'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelFont'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.font',
                          type: 'font',
                          id: 'd19484b52f214d9abe44ecf5349e2b87'
                        },
                        {
                          label: {
                            text: 'this.localeData.border'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.border',
                          type: 'border-picker',
                          id: 'cbe0c088b8c240728ab6dbd5ff5d0070'
                        },
                        {
                          label: {
                            text: 'this.localeData.buttonPosition'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 3,
                          propertyPath: 'runtime.flexPosition',
                          type: 'omni-direction-pad',
                          id: 'c034f3dc7c6d40218af69234d71bffa6'
                        },
                        {
                          label: {
                            text: 'this.localeData.sizeToCell'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 9,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.sizeToCell',
                          type: 'toggle-switch',
                          id: 'a9088c872a4b46fbbd12b89f5676ff8a'
                        },
                        {
                          label: {
                            text: 'this.localeData.name'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 10,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.name',
                          type: 'text-box',
                          id: 'a2713f3497f0413084815ea927eb3085'
                        },
                      ],
                    },
                  ],
                },
                inputWithTextFieldNoPlaceHolder: {
                  type: 'form-container',
                  id: 'f4c445340820439fb1ee050d96317ad6',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto auto auto auto'
                      },
                      id: 'e90716f18973484ebbf15d377a91b8b0',
                      controls: [
                        {
                          label: {
                            text: ''
                          },
                          textStyle:
                            'padding-inline-start: 32px; background-image: c61915ddf2974a55bc83fcbcd76f8e8a; background-position: left center; background-repeat: no-repeat;',
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.displayName',
                          type: 'text-box',
                          id: 'bf726b89b4b144a4b555a114b0cfa60e',
                          readOnly: true
                        },
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'aa904c2aca0b41a99b2ca0ccc1a40885'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelText'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.text',
                          type: 'text-box',
                          id: 'daa765b821fc46889acdd241d6aabada'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'e3d869cd4e0941f9a9a6ae1f4e44a259'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'c259d740f2554aed9ef7a49d24a8dd2b'
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'd409b3b6c0c146aca9ff4fcb2e99c103'
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 7,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'b874f54ab040402fa37ae3452cdb4650'
                        },
                        {
                          label: {
                            text: 'this.localeData.instructionsTooltip'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.tooltip',
                          type: 'text-box',
                          id: 'd7404d6b5b094cafbe188af1e827a36d'
                        },
                        {
                          label: {
                            text: 'this.localeData.labelFont'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 9,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.font',
                          type: 'font',
                          id: 'e466ea2c09784f3083ad0c2090fce5ad'
                        },
                        {
                          label: {
                            text: 'this.localeData.inputFont'
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 10,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.input',
                          type: 'font',
                          id: 'd5a922415a57406c80b9bd7d634bda26'
                        },
                      ],
                    },
                  ],
                },
              },
              additionalConstraints: {
                shown: true,
              },
            },
          },
        },
      };
    default:
      return {};
  }
};
