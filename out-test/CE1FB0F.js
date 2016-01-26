goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41153__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41154__i = 0, G__41154__a = new Array(arguments.length -  0);
while (G__41154__i < G__41154__a.length) {G__41154__a[G__41154__i] = arguments[G__41154__i + 0]; ++G__41154__i;}
  args = new cljs.core.IndexedSeq(G__41154__a,0);
} 
return G__41153__delegate.call(this,args);};
G__41153.cljs$lang$maxFixedArity = 0;
G__41153.cljs$lang$applyTo = (function (arglist__41155){
var args = cljs.core.seq(arglist__41155);
return G__41153__delegate(args);
});
G__41153.cljs$core$IFn$_invoke$arity$variadic = G__41153__delegate;
return G__41153;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41156__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41157__i = 0, G__41157__a = new Array(arguments.length -  0);
while (G__41157__i < G__41157__a.length) {G__41157__a[G__41157__i] = arguments[G__41157__i + 0]; ++G__41157__i;}
  args = new cljs.core.IndexedSeq(G__41157__a,0);
} 
return G__41156__delegate.call(this,args);};
G__41156.cljs$lang$maxFixedArity = 0;
G__41156.cljs$lang$applyTo = (function (arglist__41158){
var args = cljs.core.seq(arglist__41158);
return G__41156__delegate(args);
});
G__41156.cljs$core$IFn$_invoke$arity$variadic = G__41156__delegate;
return G__41156;
})()
;

return null;
});
