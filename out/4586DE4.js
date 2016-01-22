goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20584__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20585__i = 0, G__20585__a = new Array(arguments.length -  0);
while (G__20585__i < G__20585__a.length) {G__20585__a[G__20585__i] = arguments[G__20585__i + 0]; ++G__20585__i;}
  args = new cljs.core.IndexedSeq(G__20585__a,0);
} 
return G__20584__delegate.call(this,args);};
G__20584.cljs$lang$maxFixedArity = 0;
G__20584.cljs$lang$applyTo = (function (arglist__20586){
var args = cljs.core.seq(arglist__20586);
return G__20584__delegate(args);
});
G__20584.cljs$core$IFn$_invoke$arity$variadic = G__20584__delegate;
return G__20584;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20587__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20588__i = 0, G__20588__a = new Array(arguments.length -  0);
while (G__20588__i < G__20588__a.length) {G__20588__a[G__20588__i] = arguments[G__20588__i + 0]; ++G__20588__i;}
  args = new cljs.core.IndexedSeq(G__20588__a,0);
} 
return G__20587__delegate.call(this,args);};
G__20587.cljs$lang$maxFixedArity = 0;
G__20587.cljs$lang$applyTo = (function (arglist__20589){
var args = cljs.core.seq(arglist__20589);
return G__20587__delegate(args);
});
G__20587.cljs$core$IFn$_invoke$arity$variadic = G__20587__delegate;
return G__20587;
})()
;

return null;
});
