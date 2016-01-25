goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19360__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19361__i = 0, G__19361__a = new Array(arguments.length -  0);
while (G__19361__i < G__19361__a.length) {G__19361__a[G__19361__i] = arguments[G__19361__i + 0]; ++G__19361__i;}
  args = new cljs.core.IndexedSeq(G__19361__a,0);
} 
return G__19360__delegate.call(this,args);};
G__19360.cljs$lang$maxFixedArity = 0;
G__19360.cljs$lang$applyTo = (function (arglist__19362){
var args = cljs.core.seq(arglist__19362);
return G__19360__delegate(args);
});
G__19360.cljs$core$IFn$_invoke$arity$variadic = G__19360__delegate;
return G__19360;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19363__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19364__i = 0, G__19364__a = new Array(arguments.length -  0);
while (G__19364__i < G__19364__a.length) {G__19364__a[G__19364__i] = arguments[G__19364__i + 0]; ++G__19364__i;}
  args = new cljs.core.IndexedSeq(G__19364__a,0);
} 
return G__19363__delegate.call(this,args);};
G__19363.cljs$lang$maxFixedArity = 0;
G__19363.cljs$lang$applyTo = (function (arglist__19365){
var args = cljs.core.seq(arglist__19365);
return G__19363__delegate(args);
});
G__19363.cljs$core$IFn$_invoke$arity$variadic = G__19363__delegate;
return G__19363;
})()
;

return null;
});
