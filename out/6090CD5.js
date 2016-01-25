goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__272624__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__272624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__272625__i = 0, G__272625__a = new Array(arguments.length -  0);
while (G__272625__i < G__272625__a.length) {G__272625__a[G__272625__i] = arguments[G__272625__i + 0]; ++G__272625__i;}
  args = new cljs.core.IndexedSeq(G__272625__a,0);
} 
return G__272624__delegate.call(this,args);};
G__272624.cljs$lang$maxFixedArity = 0;
G__272624.cljs$lang$applyTo = (function (arglist__272626){
var args = cljs.core.seq(arglist__272626);
return G__272624__delegate(args);
});
G__272624.cljs$core$IFn$_invoke$arity$variadic = G__272624__delegate;
return G__272624;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__272627__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__272627 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__272628__i = 0, G__272628__a = new Array(arguments.length -  0);
while (G__272628__i < G__272628__a.length) {G__272628__a[G__272628__i] = arguments[G__272628__i + 0]; ++G__272628__i;}
  args = new cljs.core.IndexedSeq(G__272628__a,0);
} 
return G__272627__delegate.call(this,args);};
G__272627.cljs$lang$maxFixedArity = 0;
G__272627.cljs$lang$applyTo = (function (arglist__272629){
var args = cljs.core.seq(arglist__272629);
return G__272627__delegate(args);
});
G__272627.cljs$core$IFn$_invoke$arity$variadic = G__272627__delegate;
return G__272627;
})()
;

return null;
});
