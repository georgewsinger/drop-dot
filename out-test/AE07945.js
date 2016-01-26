goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41142__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41143__i = 0, G__41143__a = new Array(arguments.length -  0);
while (G__41143__i < G__41143__a.length) {G__41143__a[G__41143__i] = arguments[G__41143__i + 0]; ++G__41143__i;}
  args = new cljs.core.IndexedSeq(G__41143__a,0);
} 
return G__41142__delegate.call(this,args);};
G__41142.cljs$lang$maxFixedArity = 0;
G__41142.cljs$lang$applyTo = (function (arglist__41144){
var args = cljs.core.seq(arglist__41144);
return G__41142__delegate(args);
});
G__41142.cljs$core$IFn$_invoke$arity$variadic = G__41142__delegate;
return G__41142;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41145__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41146__i = 0, G__41146__a = new Array(arguments.length -  0);
while (G__41146__i < G__41146__a.length) {G__41146__a[G__41146__i] = arguments[G__41146__i + 0]; ++G__41146__i;}
  args = new cljs.core.IndexedSeq(G__41146__a,0);
} 
return G__41145__delegate.call(this,args);};
G__41145.cljs$lang$maxFixedArity = 0;
G__41145.cljs$lang$applyTo = (function (arglist__41147){
var args = cljs.core.seq(arglist__41147);
return G__41145__delegate(args);
});
G__41145.cljs$core$IFn$_invoke$arity$variadic = G__41145__delegate;
return G__41145;
})()
;

return null;
});
