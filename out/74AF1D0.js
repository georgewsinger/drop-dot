goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__325866__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__325866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__325867__i = 0, G__325867__a = new Array(arguments.length -  0);
while (G__325867__i < G__325867__a.length) {G__325867__a[G__325867__i] = arguments[G__325867__i + 0]; ++G__325867__i;}
  args = new cljs.core.IndexedSeq(G__325867__a,0);
} 
return G__325866__delegate.call(this,args);};
G__325866.cljs$lang$maxFixedArity = 0;
G__325866.cljs$lang$applyTo = (function (arglist__325868){
var args = cljs.core.seq(arglist__325868);
return G__325866__delegate(args);
});
G__325866.cljs$core$IFn$_invoke$arity$variadic = G__325866__delegate;
return G__325866;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__325869__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__325869 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__325870__i = 0, G__325870__a = new Array(arguments.length -  0);
while (G__325870__i < G__325870__a.length) {G__325870__a[G__325870__i] = arguments[G__325870__i + 0]; ++G__325870__i;}
  args = new cljs.core.IndexedSeq(G__325870__a,0);
} 
return G__325869__delegate.call(this,args);};
G__325869.cljs$lang$maxFixedArity = 0;
G__325869.cljs$lang$applyTo = (function (arglist__325871){
var args = cljs.core.seq(arglist__325871);
return G__325869__delegate(args);
});
G__325869.cljs$core$IFn$_invoke$arity$variadic = G__325869__delegate;
return G__325869;
})()
;

return null;
});
