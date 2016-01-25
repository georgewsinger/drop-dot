goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__234896__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__234896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234897__i = 0, G__234897__a = new Array(arguments.length -  0);
while (G__234897__i < G__234897__a.length) {G__234897__a[G__234897__i] = arguments[G__234897__i + 0]; ++G__234897__i;}
  args = new cljs.core.IndexedSeq(G__234897__a,0);
} 
return G__234896__delegate.call(this,args);};
G__234896.cljs$lang$maxFixedArity = 0;
G__234896.cljs$lang$applyTo = (function (arglist__234898){
var args = cljs.core.seq(arglist__234898);
return G__234896__delegate(args);
});
G__234896.cljs$core$IFn$_invoke$arity$variadic = G__234896__delegate;
return G__234896;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__234899__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__234899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__234900__i = 0, G__234900__a = new Array(arguments.length -  0);
while (G__234900__i < G__234900__a.length) {G__234900__a[G__234900__i] = arguments[G__234900__i + 0]; ++G__234900__i;}
  args = new cljs.core.IndexedSeq(G__234900__a,0);
} 
return G__234899__delegate.call(this,args);};
G__234899.cljs$lang$maxFixedArity = 0;
G__234899.cljs$lang$applyTo = (function (arglist__234901){
var args = cljs.core.seq(arglist__234901);
return G__234899__delegate(args);
});
G__234899.cljs$core$IFn$_invoke$arity$variadic = G__234899__delegate;
return G__234899;
})()
;

return null;
});
