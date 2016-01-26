goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22044__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22045__i = 0, G__22045__a = new Array(arguments.length -  0);
while (G__22045__i < G__22045__a.length) {G__22045__a[G__22045__i] = arguments[G__22045__i + 0]; ++G__22045__i;}
  args = new cljs.core.IndexedSeq(G__22045__a,0);
} 
return G__22044__delegate.call(this,args);};
G__22044.cljs$lang$maxFixedArity = 0;
G__22044.cljs$lang$applyTo = (function (arglist__22046){
var args = cljs.core.seq(arglist__22046);
return G__22044__delegate(args);
});
G__22044.cljs$core$IFn$_invoke$arity$variadic = G__22044__delegate;
return G__22044;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22047__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22048__i = 0, G__22048__a = new Array(arguments.length -  0);
while (G__22048__i < G__22048__a.length) {G__22048__a[G__22048__i] = arguments[G__22048__i + 0]; ++G__22048__i;}
  args = new cljs.core.IndexedSeq(G__22048__a,0);
} 
return G__22047__delegate.call(this,args);};
G__22047.cljs$lang$maxFixedArity = 0;
G__22047.cljs$lang$applyTo = (function (arglist__22049){
var args = cljs.core.seq(arglist__22049);
return G__22047__delegate(args);
});
G__22047.cljs$core$IFn$_invoke$arity$variadic = G__22047__delegate;
return G__22047;
})()
;

return null;
});
