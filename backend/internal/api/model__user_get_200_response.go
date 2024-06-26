/*
Twitter API

This is a sample server Twitter API server.

API version: 1.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the UserGet200Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UserGet200Response{}

// UserGet200Response struct for UserGet200Response
type UserGet200Response struct {
	Id *int `json:"id,omitempty"`
	Username *string `json:"username,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
}

// NewUserGet200Response instantiates a new UserGet200Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUserGet200Response() *UserGet200Response {
	this := UserGet200Response{}
	return &this
}

// NewUserGet200ResponseWithDefaults instantiates a new UserGet200Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUserGet200ResponseWithDefaults() *UserGet200Response {
	this := UserGet200Response{}
	return &this
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *UserGet200Response) GetId() int {
	if o == nil || IsNil(o.Id) {
		var ret int
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserGet200Response) GetIdOk() (*int, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *UserGet200Response) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given int and assigns it to the Id field.
func (o *UserGet200Response) SetId(v int) {
	o.Id = &v
}

// GetUsername returns the Username field value if set, zero value otherwise.
func (o *UserGet200Response) GetUsername() string {
	if o == nil || IsNil(o.Username) {
		var ret string
		return ret
	}
	return *o.Username
}

// GetUsernameOk returns a tuple with the Username field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserGet200Response) GetUsernameOk() (*string, bool) {
	if o == nil || IsNil(o.Username) {
		return nil, false
	}
	return o.Username, true
}

// HasUsername returns a boolean if a field has been set.
func (o *UserGet200Response) HasUsername() bool {
	if o != nil && !IsNil(o.Username) {
		return true
	}

	return false
}

// SetUsername gets a reference to the given string and assigns it to the Username field.
func (o *UserGet200Response) SetUsername(v string) {
	o.Username = &v
}

// GetDisplayName returns the DisplayName field value if set, zero value otherwise.
func (o *UserGet200Response) GetDisplayName() string {
	if o == nil || IsNil(o.DisplayName) {
		var ret string
		return ret
	}
	return *o.DisplayName
}

// GetDisplayNameOk returns a tuple with the DisplayName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserGet200Response) GetDisplayNameOk() (*string, bool) {
	if o == nil || IsNil(o.DisplayName) {
		return nil, false
	}
	return o.DisplayName, true
}

// HasDisplayName returns a boolean if a field has been set.
func (o *UserGet200Response) HasDisplayName() bool {
	if o != nil && !IsNil(o.DisplayName) {
		return true
	}

	return false
}

// SetDisplayName gets a reference to the given string and assigns it to the DisplayName field.
func (o *UserGet200Response) SetDisplayName(v string) {
	o.DisplayName = &v
}

func (o UserGet200Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UserGet200Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Username) {
		toSerialize["username"] = o.Username
	}
	if !IsNil(o.DisplayName) {
		toSerialize["display_name"] = o.DisplayName
	}
	return toSerialize, nil
}

type NullableUserGet200Response struct {
	value *UserGet200Response
	isSet bool
}

func (v NullableUserGet200Response) Get() *UserGet200Response {
	return v.value
}

func (v *NullableUserGet200Response) Set(val *UserGet200Response) {
	v.value = val
	v.isSet = true
}

func (v NullableUserGet200Response) IsSet() bool {
	return v.isSet
}

func (v *NullableUserGet200Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUserGet200Response(val *UserGet200Response) *NullableUserGet200Response {
	return &NullableUserGet200Response{value: val, isSet: true}
}

func (v NullableUserGet200Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUserGet200Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


