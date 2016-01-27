goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32848__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32849__i = 0, G__32849__a = new Array(arguments.length -  0);
while (G__32849__i < G__32849__a.length) {G__32849__a[G__32849__i] = arguments[G__32849__i + 0]; ++G__32849__i;}
  args = new cljs.core.IndexedSeq(G__32849__a,0);
} 
return G__32848__delegate.call(this,args);};
G__32848.cljs$lang$maxFixedArity = 0;
G__32848.cljs$lang$applyTo = (function (arglist__32850){
var args = cljs.core.seq(arglist__32850);
return G__32848__delegate(args);
});
G__32848.cljs$core$IFn$_invoke$arity$variadic = G__32848__delegate;
return G__32848;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32851__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32852__i = 0, G__32852__a = new Array(arguments.length -  0);
while (G__32852__i < G__32852__a.length) {G__32852__a[G__32852__i] = arguments[G__32852__i + 0]; ++G__32852__i;}
  args = new cljs.core.IndexedSeq(G__32852__a,0);
} 
return G__32851__delegate.call(this,args);};
G__32851.cljs$lang$maxFixedArity = 0;
G__32851.cljs$lang$applyTo = (function (arglist__32853){
var args = cljs.core.seq(arglist__32853);
return G__32851__delegate(args);
});
G__32851.cljs$core$IFn$_invoke$arity$variadic = G__32851__delegate;
return G__32851;
})()
;

return null;
});
