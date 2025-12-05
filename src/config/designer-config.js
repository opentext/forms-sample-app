export const DesignerConfigNames = {
  simpleOnlyModel: 'simpleOnlyModel',
  simpleNoModel: 'simpleNoModel',
  standard: 'standard',
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
                canvas: {
                  configName: 'canvas',
                  shown: true,
                  supported: true,
                },
                'check-box': {
                  configName: 'inputWithNoTextField',
                  shown: false,
                },
                'control-container': {
                  configName: 'container',
                  shown: true,
                  supported: true,
                },
                datetime: {
                  date: {
                    configName: 'inputWithTextFieldNoTypeSelection',
                    shown: false,
                  },
                  dateTime: {
                    configName: 'inputWithTextFieldNoTypeSelection',
                    shown: false,
                  },
                },
                'form-container': {
                  configName: 'form',
                  shown: true,
                  supported: true,
                },
                label: {
                  configName: 'label',
                  shown: true,
                  supported: true,
                },
                'responsive-form-grid': {
                  configName: 'default',
                  shown: false,
                  supported: true,
                },
                section: {
                  configName: 'section',
                  shown: true,
                  supported: true,
                },
                'select-box': {
                  configName: 'selectBox',
                  shown: false,
                },
                separator: {
                  configName: 'default',
                  shown: true,
                  supported: true,
                },
                tabs: {
                  configName: 'multiplePanelContainer',
                  shown: true,
                  supported: true,
                },
                'text-area': {
                  configName: 'inputWithTextField',
                  shown: false,
                },
                'text-box': {
                  number: {
                    configName: 'inputWithTextFieldAndInputAndInputAlignment',
                    shown: false,
                  },
                  integer: {
                    configName: 'inputWithTextFieldAndInputAndInputAlignment',
                    shown: false,
                  },
                  string: {
                    configName: 'inputWithTextField',
                    shown: false,
                  },
                },
                'toggle-switch': {
                  configName: 'inputWithNoTextField',
                  shown: false,
                },
                'user-control': {
                  configName: 'inputWithTextField',
                  shown: false,
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
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.layoutTextStyle',
                          type: 'type-ahead',
                          id: 'aefa1dc0fdbf4e10948461d638923e46',
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
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
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
                          gridRowStart: 3,
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
                          gridRowStart: 4,
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
                          gridRowStart: 5,
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
                          gridRowStart: 6,
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
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
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
                          gridRowStart: 3,
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
                          gridRowStart: 4,
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
                          gridRowStart: 5,
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
                          gridRowStart: 6,
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
                          gridRowStart: 7,
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
                          gridRowStart: 8,
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
                  id: 'dbb64f84dc874005aca8a80c536b495f',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows:
                          'auto auto auto auto auto auto auto auto',
                      },
                      id: 'd537023fe06b43a0bc6570bf31c75d9b',
                      border: 'border: 0 solid #ddd',
                      controls: [
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'f073a2c883554438986ac7d6cc9179f4',
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
                          id: 'af6bf2621b594d939bade9f246e0f2ac',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'f5358baec8d84c5b81004fed2d787dbb',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'aafa083e8a5644b881d22ee449db11b3',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'c13b6ec33cfc4a7ca101fca599d126f1',
                        },
                        {
                          label: {
                            text: 'this.localeData.placeHolderText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.placeholder',
                          type: 'text-box',
                          id: 'df5e756ee90c4a4dabd4dae81eba0dab',
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
                          id: 'bc9c825226134fdb87f3d7db0e5c3c4c',
                        },
                        {
                          label: {
                            text: 'this.localeData.shownItems',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.shownItems',
                          type: 'type-ahead',
                          id: 'a1b739da4d1745e296954f5c1bc4124a',
                        },
                      ],
                    },
                  ],
                },
                section: {
                  type: 'form-container',
                  id: 'd17e55a342d14c128e96493bc4fe4263',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto',
                      },
                      id: 'e38eaf83828a45fcade3dc434571c1d7',
                      controls: [
                        {
                          label: {
                            text: 'this.localeData.rowsToDisplay',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          placeholder: '',
                          propertyPath: 'runtime.section.rowsToDisplay',
                          type: 'text-box',
                          id: 'c2ecef3597e547128b78361634223ea5',
                          dataType: 'integer',
                          minValue: 1,
                          maxValue: 1000,
                        },
                        {
                          label: {
                            text: 'this.localeData.headerTitle',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.title.text',
                          type: 'text-box',
                          id: 'd53b6b5162a44d94a385b57e08845f7b',
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'c5fe559db05b48f092274ece83968c5e',
                        },
                        {
                          label: {
                            text: 'this.localeData.inheritParentColumnCount',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath:
                            'designer.grid.inheritParentColumnCount',
                          type: 'toggle-switch',
                          id: 'd98ba69182b64e61bba26cab30fca41e',
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
                          id: 'dcc150b288b04a158a4f8ad84087e670',
                        },
                      ],
                    },
                  ],
                },
                container: {
                  type: 'form-container',
                  id: 'babe7f5e890e42edbfcd177294b2dc28',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto auto',
                      },
                      id: 'b1085cbe4d0144eab1e6046287a44f53',
                      controls: [
                        {
                          label: {
                            text: 'this.localeData.showHeader',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.title.show',
                          type: 'toggle-switch',
                          id: 'dc760d9f3ec74dfd8deaebf3542badd5',
                        },
                        {
                          label: {
                            text: 'this.localeData.headerTitle',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.title.text',
                          type: 'text-box',
                          id: 'f81e41ce4e914eae8dda095c8656f419',
                        },
                        {
                          label: {
                            text: 'this.localeData.removePadding',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.noMargin',
                          type: 'toggle-switch',
                          id: 'b2d0beb7d334403194a6c9b8831e5125',
                        },
                        {
                          label: {
                            text: 'this.localeData.hideBorder',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.noBorder',
                          type: 'toggle-switch',
                          id: 'd7b27ca20c934d628ba1c4364ea5c151',
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'b6c8ec8139684cf79358b949c33618fe',
                        },
                        {
                          label: {
                            text: 'this.localeData.inheritParentColumnCount',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath:
                            'designer.grid.inheritParentColumnCount',
                          type: 'toggle-switch',
                          id: 'e02a260ca39642d5a7f26d2be24fe030',
                        },
                        {
                          label: {
                            text: 'this.localeData.numberOfColumns',
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
                          id: 'd121353003f04773a2edac9a1c1de8f7',
                        },
                      ],
                    },
                  ],
                },
                form: {
                  type: 'form-container',
                  id: 'e8958fe97f9e49b78cfe0d79c1392961',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto',
                      },
                      id: 'cffd436392944be0b25487c02a5e6676',
                      controls: [
                        {
                          label: {
                            text: 'this.localeData.headerTitle',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.title.text',
                          type: 'text-box',
                          id: 'dad727268ae543e28d5362b40d31c950',
                        },
                        {
                          label: {
                            text: 'this.localeData.inheritParentColumnCount',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath:
                            'designer.grid.inheritParentColumnCount',
                          type: 'toggle-switch',
                          id: 'ea4909ec3ba6456ab77f9c1d336223b5',
                        },
                        {
                          label: {
                            text: 'this.localeData.numberOfColumns',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          dataType: 'integer',
                          placeholder: '',
                          propertyPath: 'designer.grid.numberOfColumns',
                          type: 'text-box',
                          maxValue: 12,
                          minValue: 1,
                          id: 'acfbb21844344094815d39e826b321c4',
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
                            text: 'this.localeData.numberOfTabs',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
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
                          gridRowStart: 3,
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
                canvas: {
                  type: 'form-container',
                  id: 'f360ab7d122b4edaa7b2e3e1d068b48a',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto',
                      },
                      id: 'fcce8c13cde44c39bbb01fd309f85e0f',
                      controls: [
                        {
                          label: {
                            text: 'this.localeData.numberOfColumns',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          dataType: 'integer',
                          placeholder: '',
                          propertyPath: 'designer.grid.numberOfColumns',
                          type: 'text-box',
                          maxValue: 12,
                          minValue: 1,
                          id: 'ba324d99dbe548f28789181d622d01b0',
                        },
                        {
                          label: {
                            text: 'this.localeData.rearrangeControlsForSmallScreens',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath:
                            'runtime.rearrangeControlsForSmallScreens',
                          type: 'toggle-switch',
                          id: 'd92b7a141cf242a091eb672d3c079a9b',
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
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
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
                          gridRowStart: 3,
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
                          gridRowStart: 4,
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
                          gridRowStart: 5,
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
                          gridRowStart: 6,
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
                          gridRowStart: 7,
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
                          gridRowStart: 8,
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
                          gridRowStart: 9,
                          gridRowEnd: 1,
                          propertyPath: 'designer.disableTypeAhead',
                          type: 'toggle-switch',
                          id: 'e365bbc98d614835bfb03fc3c43854c7',
                        },
                      ],
                    },
                  ],
                },
                inputWithTextFieldAndInputAndInputAlignment: {
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
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
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
                          gridRowStart: 3,
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
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'd72d4d16f4fc430586b71a738ade96cd',
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'bafdc7ecca3845c4b75b3ec6afdcb6b9',
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
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
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
                          gridRowStart: 3,
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
                          gridRowStart: 4,
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
                          gridRowStart: 5,
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
                          gridRowStart: 6,
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
                canvas: {
                  configName: 'canvas',
                  shown: true,
                  supported: true,
                },
                'check-box': {
                  configName: 'inputWithNoTextField',
                  shown: true,
                  supported: true,
                },
                'control-container': {
                  configName: 'container',
                  shown: true,
                  supported: true,
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
                'form-container': {
                  configName: 'form',
                  shown: true,
                  supported: true,
                },
                label: {
                  configName: 'label',
                  shown: true,
                  supported: true,
                },
                'responsive-form-grid': {
                  configName: 'default',
                  shown: false,
                  supported: true,
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
                    configName: 'inputWithTextFieldAndInputAndInputAlignment',
                    shown: true,
                    supported: true,
                  },
                  integer: {
                    configName: 'inputWithTextFieldAndInputAndInputAlignment',
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
                            text: 'this.localeData.labelText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.layoutTextStyle',
                          type: 'type-ahead',
                          id: 'aefa1dc0fdbf4e10948461d638923e46',
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
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
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
                          gridRowStart: 3,
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
                          gridRowStart: 4,
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
                          gridRowStart: 5,
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
                          gridRowStart: 6,
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
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
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
                          gridRowStart: 3,
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
                          gridRowStart: 4,
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
                          gridRowStart: 5,
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
                          gridRowStart: 6,
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
                          gridRowStart: 7,
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
                          gridRowStart: 8,
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
                  id: 'dbb64f84dc874005aca8a80c536b495f',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows:
                          'auto auto auto auto auto auto auto auto',
                      },
                      id: 'd537023fe06b43a0bc6570bf31c75d9b',
                      border: 'border: 0 solid #ddd',
                      controls: [
                        {
                          label: {
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.show',
                          type: 'toggle-switch',
                          id: 'f073a2c883554438986ac7d6cc9179f4',
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
                          id: 'af6bf2621b594d939bade9f246e0f2ac',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelPosition',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.position',
                          type: 'type-ahead',
                          id: 'f5358baec8d84c5b81004fed2d787dbb',
                        },
                        {
                          label: {
                            text: 'this.localeData.labelAlignment',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'aafa083e8a5644b881d22ee449db11b3',
                        },
                        {
                          label: {
                            text: 'this.localeData.readOnly',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.readOnly',
                          type: 'toggle-switch',
                          id: 'c13b6ec33cfc4a7ca101fca599d126f1',
                        },
                        {
                          label: {
                            text: 'this.localeData.placeHolderText',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.placeholder',
                          type: 'text-box',
                          id: 'df5e756ee90c4a4dabd4dae81eba0dab',
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
                          id: 'bc9c825226134fdb87f3d7db0e5c3c4c',
                        },
                        {
                          label: {
                            text: 'this.localeData.shownItems',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 8,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.shownItems',
                          type: 'type-ahead',
                          id: 'a1b739da4d1745e296954f5c1bc4124a',
                        },
                      ],
                    },
                  ],
                },
                section: {
                  type: 'form-container',
                  id: 'd17e55a342d14c128e96493bc4fe4263',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto',
                      },
                      id: 'e38eaf83828a45fcade3dc434571c1d7',
                      controls: [
                        {
                          label: {
                            text: 'this.localeData.rowsToDisplay',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          placeholder: '',
                          propertyPath: 'runtime.section.rowsToDisplay',
                          type: 'text-box',
                          id: 'c2ecef3597e547128b78361634223ea5',
                          dataType: 'integer',
                          minValue: 1,
                          maxValue: 1000,
                        },
                        {
                          label: {
                            text: 'this.localeData.headerTitle',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.title.text',
                          type: 'text-box',
                          id: 'd53b6b5162a44d94a385b57e08845f7b',
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'c5fe559db05b48f092274ece83968c5e',
                        },
                        {
                          label: {
                            text: 'this.localeData.inheritParentColumnCount',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath:
                            'designer.grid.inheritParentColumnCount',
                          type: 'toggle-switch',
                          id: 'd98ba69182b64e61bba26cab30fca41e',
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
                          id: 'dcc150b288b04a158a4f8ad84087e670',
                        },
                      ],
                    },
                  ],
                },
                container: {
                  type: 'form-container',
                  id: 'babe7f5e890e42edbfcd177294b2dc28',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto auto auto auto auto',
                      },
                      id: 'b1085cbe4d0144eab1e6046287a44f53',
                      controls: [
                        {
                          label: {
                            text: 'this.localeData.showHeader',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.title.show',
                          type: 'toggle-switch',
                          id: 'dc760d9f3ec74dfd8deaebf3542badd5',
                        },
                        {
                          label: {
                            text: 'this.localeData.headerTitle',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.title.text',
                          type: 'text-box',
                          id: 'f81e41ce4e914eae8dda095c8656f419',
                        },
                        {
                          label: {
                            text: 'this.localeData.removePadding',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.noMargin',
                          type: 'toggle-switch',
                          id: 'b2d0beb7d334403194a6c9b8831e5125',
                        },
                        {
                          label: {
                            text: 'this.localeData.hideBorder',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.noBorder',
                          type: 'toggle-switch',
                          id: 'd7b27ca20c934d628ba1c4364ea5c151',
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'b6c8ec8139684cf79358b949c33618fe',
                        },
                        {
                          label: {
                            text: 'this.localeData.inheritParentColumnCount',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 6,
                          gridRowEnd: 1,
                          propertyPath:
                            'designer.grid.inheritParentColumnCount',
                          type: 'toggle-switch',
                          id: 'e02a260ca39642d5a7f26d2be24fe030',
                        },
                        {
                          label: {
                            text: 'this.localeData.numberOfColumns',
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
                          id: 'd121353003f04773a2edac9a1c1de8f7',
                        },
                      ],
                    },
                  ],
                },
                form: {
                  type: 'form-container',
                  id: 'e8958fe97f9e49b78cfe0d79c1392961',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto auto',
                      },
                      id: 'cffd436392944be0b25487c02a5e6676',
                      controls: [
                        {
                          label: {
                            text: 'this.localeData.headerTitle',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.title.text',
                          type: 'text-box',
                          id: 'dad727268ae543e28d5362b40d31c950',
                        },
                        {
                          label: {
                            text: 'this.localeData.inheritParentColumnCount',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath:
                            'designer.grid.inheritParentColumnCount',
                          type: 'toggle-switch',
                          id: 'ea4909ec3ba6456ab77f9c1d336223b5',
                        },
                        {
                          label: {
                            text: 'this.localeData.numberOfColumns',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 3,
                          gridRowEnd: 1,
                          dataType: 'integer',
                          placeholder: '',
                          propertyPath: 'designer.grid.numberOfColumns',
                          type: 'text-box',
                          maxValue: 12,
                          minValue: 1,
                          id: 'acfbb21844344094815d39e826b321c4',
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
                            text: 'this.localeData.numberOfTabs',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
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
                          gridRowStart: 3,
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
                canvas: {
                  type: 'form-container',
                  id: 'f360ab7d122b4edaa7b2e3e1d068b48a',
                  controls: [
                    {
                      type: 'responsive-form-grid',
                      numberOfColumns: 1,
                      grid: {
                        gap: 20,
                        gridTemplateRows: 'auto auto',
                      },
                      id: 'fcce8c13cde44c39bbb01fd309f85e0f',
                      controls: [
                        {
                          label: {
                            text: 'this.localeData.numberOfColumns',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
                          gridRowEnd: 1,
                          dataType: 'integer',
                          placeholder: '',
                          propertyPath: 'designer.grid.numberOfColumns',
                          type: 'text-box',
                          maxValue: 12,
                          minValue: 1,
                          id: 'ba324d99dbe548f28789181d622d01b0',
                        },
                        {
                          label: {
                            text: 'this.localeData.rearrangeControlsForSmallScreens',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 2,
                          gridRowEnd: 1,
                          propertyPath:
                            'runtime.rearrangeControlsForSmallScreens',
                          type: 'toggle-switch',
                          id: 'd92b7a141cf242a091eb672d3c079a9b',
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
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
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
                          gridRowStart: 3,
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
                          gridRowStart: 4,
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
                          gridRowStart: 5,
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
                          gridRowStart: 6,
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
                          gridRowStart: 7,
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
                          gridRowStart: 8,
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
                          gridRowStart: 9,
                          gridRowEnd: 1,
                          propertyPath: 'designer.disableTypeAhead',
                          type: 'toggle-switch',
                          id: 'e365bbc98d614835bfb03fc3c43854c7',
                        },
                      ],
                    },
                  ],
                },
                inputWithTextFieldAndInputAndInputAlignment: {
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
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
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
                          gridRowStart: 3,
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
                          gridRowStart: 4,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.label.alignment',
                          type: 'type-ahead',
                          id: 'd72d4d16f4fc430586b71a738ade96cd',
                        },
                        {
                          label: {
                            text: 'this.localeData.controlType',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 5,
                          gridRowEnd: 1,
                          propertyPath: 'runtime.type',
                          type: 'type-ahead',
                          id: 'bafdc7ecca3845c4b75b3ec6afdcb6b9',
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
                            text: 'this.localeData.showLabel',
                            position: 'row',
                          },
                          gridColumnStart: 1,
                          gridColumnEnd: 1,
                          gridRowStart: 1,
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
                          gridRowStart: 2,
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
                          gridRowStart: 3,
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
                          gridRowStart: 4,
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
                          gridRowStart: 5,
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
                          gridRowStart: 6,
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
    case DesignerConfigNames.standard:
      return {
        designer: {
          mainWindow: {
            controlPalette: {
              startingWidth: '260px',
              controls: {
                accordion: {
                  configName: 'multiplePanelContainer',
                  shown: false,
                  supported: false,
                },
                'action-bar': {
                  configName: 'default',
                  shown: false,
                  supported: false,
                },
                button: {
                  shown: false,
                  supported: false,
                },
                canvas: {
                  configName: 'canvas',
                  shown: true,
                  supported: true,
                },
                'check-box': {
                  configName: 'inputWithNoTextField',
                  shown: true,
                  supported: true,
                },
                'control-container': {
                  configName: 'container',
                  shown: true,
                  supported: true,
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
                'form-container': {
                  configName: 'form',
                  shown: true,
                  supported: true,
                },
                'h-flex': {
                  configName: 'default',
                  shown: false,
                  supported: false,
                },
                image: {
                  shown: false,
                  supported: false,
                },
                'image-button': {
                  shown: false,
                  supported: false,
                },
                label: {
                  configName: 'label',
                  shown: true,
                  supported: true,
                },
                'radio-group': {
                  configName: 'inputWithTextField',
                  shown: false,
                  supported: false,
                },
                'responsive-form-grid': {
                  configName: 'default',
                  shown: false,
                  supported: true,
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
                table: {
                  configName: 'default',
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
                    configName: 'inputWithTextFieldAndInputAndInputAlignment',
                    shown: true,
                    supported: true,
                    numericInputAlignment: 'start',
                  },
                  integer: {
                    configName: 'inputWithTextFieldAndInputAndInputAlignment',
                    shown: true,
                    supported: true,
                    numericInputAlignment: 'start',
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
                upload: {
                  shown: false,
                  supported: false,
                },
                'user-control': {
                  configName: 'inputWithTextField',
                  shown: true,
                  supported: true,
                },
                'v-flex': {
                  configName: 'default',
                  shown: false,
                  supported: false,
                },
              },
              sections: {
                models: {
                  facets: {},
                  maxHeight: 70,
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
              },
            },
            properties: {
              iframe: {
                linkList: {
                  allowFreeText: true,
                  links: [
                    {
                      displayName: 'Thrust API Video',
                      url: 'https://www.youtube.com/embed/VohGVyhIo3c?si=mkqAskfk6uvahrVq',
                    },
                    {
                      displayName: 'Folder Widget',
                      url: 'https://corecontent-c4sapqe.qe.bp-paas.otxlab.net/subscriptions/innovate4-qa/workspaces?nodeid=f68716fe-5a9b-4c5c-a2a4-7c45c51e7c64&breadcrumb=true&favorites=${favorites}&search=${search}&backButton=true&showRelatedWorkspaces=true&resizeWidget=true&commandsToBlacklist=',
                    },
                    // ${favorites} property paths of the control that user wants to get the value from.
                    {
                      displayName: 'React components',
                      url: 'https://elliot.otxlab.net/ot-web-components/?path=/story/components-multi-value--input-date&globals=theme:dark',
                    },
                  ],
                },
                sandboxOptions: [
                  {
                    text: 'allow-forms',
                    value: 'allow-forms',
                  },
                  {
                    text: 'allow-pointer-lock',
                    value: 'allow-pointer-lock',
                  },
                  {
                    text: 'allow-popups',
                    value: 'allow-popups',
                  },
                  {
                    text: 'allow-same-origin',
                    value: 'allow-same-origin',
                  },
                  {
                    text: 'allow-scripts',
                    value: 'allow-scripts',
                  },
                  {
                    text: 'allow-top-navigation',
                    value: 'allow-top-navigation',
                  },
                ],
                referrerPolices: [
                  {
                    text: 'no-referrer',
                    value: 'no-referrer',
                  },
                  {
                    text: 'no-referrer-when-downgrade',
                    value: 'no-referrer-when-downgrade',
                  },
                  {
                    text: 'origin',
                    value: 'origin',
                  },
                  {
                    text: 'origin-when-cross-origin',
                    value: 'origin-when-cross-origin',
                  },
                  {
                    text: 'same-origin',
                    value: 'same-origin',
                  },
                  {
                    text: 'strict-origin-when-cross-origin',
                    value: 'strict-origin-when-cross-origin',
                  },
                ],
              },
              link: {
                linkList: {
                  allowFreeText: true,
                  links: [
                    {
                      displayName: 'Forms API - Documentation',
                      url: 'https://developer.opentext.com/services/products/forms-service/documentation/forms-thrust-api-reference/1',
                    },
                    {
                      displayName: 'UI Designer - Documentation',
                      url: 'https://developer.opentext.com/services/products/forms-service/documentation/forms-ui-designer/2',
                    },
                  ],
                },
                referrerPolices: [
                  {
                    text: 'no-referrer',
                    value: 'no-referrer',
                  },
                  {
                    text: 'no-referrer-when-downgrade',
                    value: 'no-referrer-when-downgrade',
                  },
                  {
                    text: 'origin',
                    value: 'origin',
                  },
                  {
                    text: 'origin-when-cross-origin',
                    value: 'origin-when-cross-origin',
                  },
                ],
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
                accordion: {
                  configName: 'multiplePanelContainer',
                  shown: true,
                  supported: true,
                },
                'action-bar': {
                  configName: 'default',
                  shown: true,
                  supported: true,
                },
                button: {
                  shown: true,
                  supported: true,
                },
                'h-flex': {
                  configName: 'default',
                  shown: true,
                  supported: true,
                },
                image: {
                  shown: true,
                  supported: true,
                },
                'image-button': {
                  shown: true,
                  supported: true,
                },
                'radio-group': {
                  configName: 'inputWithTextField',
                  shown: true,
                  supported: true,
                },
                table: {
                  configName: 'data-grid',
                  shown: true,
                  supported: true,
                },
                upload: {
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
          },
        },
      };
    default:
      return {};
  }
};
