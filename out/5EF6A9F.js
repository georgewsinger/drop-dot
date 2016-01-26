goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__284870__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__284870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284871__i = 0, G__284871__a = new Array(arguments.length -  0);
while (G__284871__i < G__284871__a.length) {G__284871__a[G__284871__i] = arguments[G__284871__i + 0]; ++G__284871__i;}
  args = new cljs.core.IndexedSeq(G__284871__a,0);
} 
return G__284870__delegate.call(this,args);};
G__284870.cljs$lang$maxFixedArity = 0;
G__284870.cljs$lang$applyTo = (function (arglist__284872){
var args = cljs.core.seq(arglist__284872);
return G__284870__delegate(args);
});
G__284870.cljs$core$IFn$_invoke$arity$variadic = G__284870__delegate;
return G__284870;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__284873__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__284873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284874__i = 0, G__284874__a = new Array(arguments.length -  0);
while (G__284874__i < G__284874__a.length) {G__284874__a[G__284874__i] = arguments[G__284874__i + 0]; ++G__284874__i;}
  args = new cljs.core.IndexedSeq(G__284874__a,0);
} 
return G__284873__delegate.call(this,args);};
G__284873.cljs$lang$maxFixedArity = 0;
G__284873.cljs$lang$applyTo = (function (arglist__284875){
var args = cljs.core.seq(arglist__284875);
return G__284873__delegate(args);
});
G__284873.cljs$core$IFn$_invoke$arity$variadic = G__284873__delegate;
return G__284873;
})()
;

return null;
});
