goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__270296__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__270296 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__270297__i = 0, G__270297__a = new Array(arguments.length -  0);
while (G__270297__i < G__270297__a.length) {G__270297__a[G__270297__i] = arguments[G__270297__i + 0]; ++G__270297__i;}
  args = new cljs.core.IndexedSeq(G__270297__a,0);
} 
return G__270296__delegate.call(this,args);};
G__270296.cljs$lang$maxFixedArity = 0;
G__270296.cljs$lang$applyTo = (function (arglist__270298){
var args = cljs.core.seq(arglist__270298);
return G__270296__delegate(args);
});
G__270296.cljs$core$IFn$_invoke$arity$variadic = G__270296__delegate;
return G__270296;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__270299__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__270299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__270300__i = 0, G__270300__a = new Array(arguments.length -  0);
while (G__270300__i < G__270300__a.length) {G__270300__a[G__270300__i] = arguments[G__270300__i + 0]; ++G__270300__i;}
  args = new cljs.core.IndexedSeq(G__270300__a,0);
} 
return G__270299__delegate.call(this,args);};
G__270299.cljs$lang$maxFixedArity = 0;
G__270299.cljs$lang$applyTo = (function (arglist__270301){
var args = cljs.core.seq(arglist__270301);
return G__270299__delegate(args);
});
G__270299.cljs$core$IFn$_invoke$arity$variadic = G__270299__delegate;
return G__270299;
})()
;

return null;
});
