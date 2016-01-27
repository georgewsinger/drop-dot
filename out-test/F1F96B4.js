goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__170978__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__170978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170979__i = 0, G__170979__a = new Array(arguments.length -  0);
while (G__170979__i < G__170979__a.length) {G__170979__a[G__170979__i] = arguments[G__170979__i + 0]; ++G__170979__i;}
  args = new cljs.core.IndexedSeq(G__170979__a,0);
} 
return G__170978__delegate.call(this,args);};
G__170978.cljs$lang$maxFixedArity = 0;
G__170978.cljs$lang$applyTo = (function (arglist__170980){
var args = cljs.core.seq(arglist__170980);
return G__170978__delegate(args);
});
G__170978.cljs$core$IFn$_invoke$arity$variadic = G__170978__delegate;
return G__170978;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__170981__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__170981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__170982__i = 0, G__170982__a = new Array(arguments.length -  0);
while (G__170982__i < G__170982__a.length) {G__170982__a[G__170982__i] = arguments[G__170982__i + 0]; ++G__170982__i;}
  args = new cljs.core.IndexedSeq(G__170982__a,0);
} 
return G__170981__delegate.call(this,args);};
G__170981.cljs$lang$maxFixedArity = 0;
G__170981.cljs$lang$applyTo = (function (arglist__170983){
var args = cljs.core.seq(arglist__170983);
return G__170981__delegate(args);
});
G__170981.cljs$core$IFn$_invoke$arity$variadic = G__170981__delegate;
return G__170981;
})()
;

return null;
});
