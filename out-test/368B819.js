goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34871__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34872__i = 0, G__34872__a = new Array(arguments.length -  0);
while (G__34872__i < G__34872__a.length) {G__34872__a[G__34872__i] = arguments[G__34872__i + 0]; ++G__34872__i;}
  args = new cljs.core.IndexedSeq(G__34872__a,0);
} 
return G__34871__delegate.call(this,args);};
G__34871.cljs$lang$maxFixedArity = 0;
G__34871.cljs$lang$applyTo = (function (arglist__34873){
var args = cljs.core.seq(arglist__34873);
return G__34871__delegate(args);
});
G__34871.cljs$core$IFn$_invoke$arity$variadic = G__34871__delegate;
return G__34871;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34874__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34875__i = 0, G__34875__a = new Array(arguments.length -  0);
while (G__34875__i < G__34875__a.length) {G__34875__a[G__34875__i] = arguments[G__34875__i + 0]; ++G__34875__i;}
  args = new cljs.core.IndexedSeq(G__34875__a,0);
} 
return G__34874__delegate.call(this,args);};
G__34874.cljs$lang$maxFixedArity = 0;
G__34874.cljs$lang$applyTo = (function (arglist__34876){
var args = cljs.core.seq(arglist__34876);
return G__34874__delegate(args);
});
G__34874.cljs$core$IFn$_invoke$arity$variadic = G__34874__delegate;
return G__34874;
})()
;

return null;
});
