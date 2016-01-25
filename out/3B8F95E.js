goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__191753__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__191753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__191754__i = 0, G__191754__a = new Array(arguments.length -  0);
while (G__191754__i < G__191754__a.length) {G__191754__a[G__191754__i] = arguments[G__191754__i + 0]; ++G__191754__i;}
  args = new cljs.core.IndexedSeq(G__191754__a,0);
} 
return G__191753__delegate.call(this,args);};
G__191753.cljs$lang$maxFixedArity = 0;
G__191753.cljs$lang$applyTo = (function (arglist__191755){
var args = cljs.core.seq(arglist__191755);
return G__191753__delegate(args);
});
G__191753.cljs$core$IFn$_invoke$arity$variadic = G__191753__delegate;
return G__191753;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__191756__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__191756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__191757__i = 0, G__191757__a = new Array(arguments.length -  0);
while (G__191757__i < G__191757__a.length) {G__191757__a[G__191757__i] = arguments[G__191757__i + 0]; ++G__191757__i;}
  args = new cljs.core.IndexedSeq(G__191757__a,0);
} 
return G__191756__delegate.call(this,args);};
G__191756.cljs$lang$maxFixedArity = 0;
G__191756.cljs$lang$applyTo = (function (arglist__191758){
var args = cljs.core.seq(arglist__191758);
return G__191756__delegate(args);
});
G__191756.cljs$core$IFn$_invoke$arity$variadic = G__191756__delegate;
return G__191756;
})()
;

return null;
});
